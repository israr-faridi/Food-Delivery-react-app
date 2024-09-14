import "./BottomHeading.css"
const BottomHeading = ({title, text}) => {
    return (
        <div className="BottomHeading">
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    )
}

export default BottomHeading
