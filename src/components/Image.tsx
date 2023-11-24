interface IPropsImage {
    ImageUrl: string,
    Alt: string,
    className? : string,
}
const Image = ({Alt,ImageUrl , className}: IPropsImage) => {
    return (
        <img
            src={ImageUrl}
            alt={Alt}
            className={className}

      />    )
}
export default Image;