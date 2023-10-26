export const getObjectInfo = (data) => {


    return {
        img: data?.img,
        text: { text: data?.text, symbols: data?.text.length, errorStatus: false},
    }
}