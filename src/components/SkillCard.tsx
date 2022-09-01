import '../style/SkillCard.scss';
import type { Technology } from '../util/Technology';

interface SkillCardProps {
    technology: Technology;
}

export default function SkillCard(props: SkillCardProps) {
    return (
        <div className="skillCardContainer">
            <div className="logoContainer">
                <img src={ props.technology.logo } />
            </div>
            <div className="techContainer">
                <h1>{ props.technology.name }</h1>
                <div className="levelContainer">
                    <span className={ props.technology.level >= 1 ? "skillMet" : "" }></span>
                    <span className={ props.technology.level >= 2 ? "skillMet" : "" }></span>
                    <span className={ props.technology.level >= 3 ? "skillMet" : "" }></span>
                    <span className={ props.technology.level >= 4 ? "skillMet" : "" }></span>
                    <span className={ props.technology.level >= 5 ? "skillMet" : "" }></span>
                </div>
            </div>
        </div>
    );
}