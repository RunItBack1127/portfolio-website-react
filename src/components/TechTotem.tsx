import '../style/TechTotem.scss';
import type { Technology } from '../util/Technology';

interface TechTotemProps {
    title: String;
    technologies: Array<Technology>;
}

interface ExperienceContainerProps {
    technology: Technology;
}

export default function TechTotem(props: TechTotemProps) {
    return (
        <article className="techTotemContainer">
            <h1 className="totemTitle">{ props.title }</h1>
            { props.technologies.map((tech) => {
                return (
                    <ExperienceContainer key={ `${tech.name}` } technology={ tech } />
                );
            }) }
        </article>
    )
}

function ExperienceContainer(props: ExperienceContainerProps) {
    return (
        <div className="expContainer">
            <h1 className="techName">{ props.technology.name }</h1>
            <div className="gaugeContainer">
                <div className="gaugeInner">
                    <svg className={ props.technology.level >= 1 ? "skillMet" : "" } viewBox="0 0 25 25">
                        <circle cx="12.5" cy="12.5" r="10"></circle>
                    </svg>
                    <svg className={ props.technology.level >= 2 ? "skillMet" : "" } viewBox="0 0 25 25">
                        <circle cx="12.5" cy="12.5" r="10"></circle>
                    </svg>
                    <svg className={ props.technology.level >= 3 ? "skillMet" : "" } viewBox="0 0 25 25">
                        <circle cx="12.5" cy="12.5" r="10"></circle>
                    </svg>
                    <svg className={ props.technology.level >= 4 ? "skillMet" : "" } viewBox="0 0 25 25">
                        <circle cx="12.5" cy="12.5" r="10"></circle>
                    </svg>
                    <svg className={ props.technology.level >= 5 ? "skillMet" : "" } viewBox="0 0 25 25">
                        <circle cx="12.5" cy="12.5" r="10"></circle>
                    </svg>
                </div>
            </div>
        </div>
    )
}