export const getShotName = (name) => {

    return name.slice(0, 5) + "----" + name.slice(-7)
}