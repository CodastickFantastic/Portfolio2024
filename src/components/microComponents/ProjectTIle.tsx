import { StaticImageData } from "next/image"

const ProjectTile = (
    {
        img,
        title,
        type,
        link
    }: {
        img: StaticImageData,
        title: string,
        type: string,
        link: string
    }): React.JSX.Element => {

    return (
        <div className="projectTile">
            <div className="imgContainer">
                <img src={img.src} alt={title} />
            </div>
            <div className="textContainer">
                <h3>{title}</h3>
                <p>{type}</p>
                <a href={link}>Sprawdź szczegóły</a>
            </div>
        </div>
    )
}


export default ProjectTile;