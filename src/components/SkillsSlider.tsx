import '../style/SkillsSlider.scss';
import type { Skill } from '../util/Skill';

interface SkillsSliderProps {
    skill: Skill
}

export default function SkillsSlider(props: SkillsSliderProps) {
    return (
        <div className="skillsSliderContainer">
            <p>{ props.skill.description }</p>
            <span style={{
                background: `linear-gradient( to right, #000 ${ props.skill.proficiency }%, #000 ${ 100 - props.skill.proficiency }%, transparent 25% )`
            }}></span>
        </div>
    );
}