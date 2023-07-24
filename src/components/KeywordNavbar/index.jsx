import {
  Box,
  Button,
  Card,
  Modal,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { BsYoutube, BsGoogle } from "react-icons/bs";
import { FaSafari } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
import { BsInstagram, BsTwitter, BsPinterest } from "react-icons/bs";
import { useFormik } from "formik";
import { useFetchKeyword } from "../API/fetchKeyWord";
import { onError } from "src/utils/func";
import { useDispatch } from "react-redux";
import {
  setKeywordLoading,
  setkeywordPlanner,
} from "src/store/KeywordPlannerSlice";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { toast } from "react-toastify";
import usePopover from "src/hooks/usePopover";
import Spinner from "src/utils/Spinner";
import { SearchTwoToneIcon } from "src/utils/icons";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "1px solid gray",
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

const keywordToBeSearched = {
  0: {
    searchEngineType: "google",
    keywordSuggestion: "keywordSuggestionGoogle",
  },
  1: {
    searchEngineType: "youtube",
    keywordSuggestion: "keywordSuggestionYoutube",
  },
  2: {
    searchEngineType: "app-store",
    keywordSuggestion: "keywordSuggestionAppStore",
  },
  3: {
    searchEngineType: "play-store",
    keywordSuggestion: "keywordSuggestionPlayStore",
  },
  4: {
    searchEngineType: "instagram",
    keywordSuggestion: "keywordSuggestionInstagram",
  },
  5: {
    searchEngineType: "twitter",
    keywordSuggestion: "keywordSuggestionTwitter",
  },
  6: {
    searchEngineType: "pinterest",
    keywordSuggestion: "keywordSuggestionPinterest",
  },
};

const KeywordNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const modalOpen = usePopover();
  const [value, setValue] = React.useState(0);

  const { mutate: fetchKeyWords } = useFetchKeyword();
  const formik = useFormik({
    initialValues: {
      keyword: "",
    },
    validationSchema: Yup.object({
      keyword: Yup.string().required(),
    }),
    onSubmit: async (values, { resetForm }) => {
      if (!localStorage.getItem("token")) {
        toast.info("Please login to search.");
        return;
      }
      modalOpen.handleOpen();

      dispatch(setKeywordLoading(true));
      let payload = {
        searchEngineType: keywordToBeSearched[value]?.searchEngineType,
        keyword: values.keyword,
      };

      payload[keywordToBeSearched[value]?.keywordSuggestion] = {};

      await fetchKeyWords(payload, {
        onSuccess: (data) => {
          resetForm();
          dispatch(setkeywordPlanner(data?.data));
          navigate("/keyword-search");
        },
        onError,
      });
      dispatch(setKeywordLoading(false));
      modalOpen.handleClose();
    },
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Card sx={{ display: "flex", p: 1, alignItems: "center", gap: 3 }}>
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label={<BsGoogle fontSize={35} />} />
            <Tab label={<BsYoutube fontSize={35} />} />
            <Tab label={<FaSafari fontSize={35} />} />
            <Tab label={<BiLogoPlayStore fontSize={35} />} />
            <Tab label={<BsInstagram fontSize={35} />} />
            <Tab label={<BsTwitter fontSize={35} />} />
            <Tab label={<BsPinterest fontSize={35} />} />
          </Tabs>
        </Box>
      </Card>
      <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
        {/* <TextField
          error={formik.errors.keyword && formik.errors.keyword}
          fullWidth
          type="text"
          name="keyword"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              formik.handleSubmit();
            }
          }}
            label="Type a keyword and press ennter"
          value={formik.values.keyword}
          onChange={formik.handleChange}
          inputProps={{
            endAdornment: (
              <Button
                sx={{ height: 55 }}
                variant="contained"
                onClick={formik.handleSubmit}
              >
                <SearchTwoToneIcon fontSize="large" />
              </Button>
            ),
          }}
        /> */}

        <TextField
          sx={{ ".MuiInputBase-root": { p: 0 } }}
          error={formik.errors.keyword && formik.errors.keyword}
          fullWidth
          type="text"
          name="keyword"
          label="Type a keyword and press enter."
          value={formik.values.keyword}
          onChange={formik.handleChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              formik.handleSubmit();
            }
          }}
          InputProps={{
            endAdornment: (
              <Button
                sx={{
                  height: 55,
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                }}
                variant="contained"
                onClick={formik.handleSubmit}
              >
                <SearchTwoToneIcon fontSize="large" />
              </Button>
            ),
          }}
        />
      </Box>
      <Modal
        open={modalOpen.open}
        onClose={modalOpen.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{ display: "flex", alignItems: "center", gap: 3 }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            <Spinner size={"3rem"} /> loading
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default KeywordNavbar;
