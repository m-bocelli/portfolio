import ResumeEmbed from '@/components/ResumeEmbed/ResumeEmbed';
import FlexContainer from '../components/FlexContainer/FlexContainer';

export default function Resume() {
    const resumePath = '/Resume3_20.pdf';

    return (
        <FlexContainer>
            <ResumeEmbed path={resumePath} />
        </FlexContainer>
    );
}
