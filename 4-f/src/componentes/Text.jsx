export default function Text(props){
    return(
        <p style={style.colorText}>{props.p}</p>
    );
}

const style = {
    colorText: {
        color: "blue",
        textAlign: "left",
        frontSize: 32,
    },
};


