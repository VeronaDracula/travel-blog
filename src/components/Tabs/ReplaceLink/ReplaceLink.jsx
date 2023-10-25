import { Link } from "react-router-dom";

const ReplaceLink = (props) => {

    const { ...OtherProps } = props;

    return <Link replace {...OtherProps}>{props.children}</Link>
}

export default ReplaceLink;