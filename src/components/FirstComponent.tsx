type propsType = {
    text: string
    size?: string
    bgColor?: string
}

const FirstComponent = ({ text, size, bgColor }: propsType) => {

    let textSize = size ? "text-" + size : "text-xl"
    let background = bgColor ? " bg-" + bgColor : "bg-blue-600"

    let classes = "px-8 py-4 text-[#dfdfdf] rounded-lg max-w-6xl mx-auto mt-16 font-semibold " + textSize + " " + background

    return <>
        <div className={classes} >{text}</div>
    </>
}

export default FirstComponent