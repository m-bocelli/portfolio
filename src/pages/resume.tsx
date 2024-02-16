import { NestedListItem } from '../constants/types';
import FlexContainer from '../components/FlexContainer/FlexContainer';
import NestedList from '../components/NestedList/NestedList';
import Subheader from '../components/Subheader/Subheader';

export default function Resume() {
    const gpa = 3.97;

    const education: NestedListItem[] = [
        {
            title: 'University of Delaware',
            desc: ['B.S. in computer science', 'Expected May 2024'],
        },
        {
            title: 'Universität Leipzig (study abroad)',
            desc: [
                'interDaF e.V. am Herder-Institut der Universität Leipzig',
                'January 2023',
            ],
        },
    ];

    const experience: NestedListItem[] = [
        {
            title: 'Teaching Assistant for CISC275: Intro to Software Engineering',
            desc: ['University of Delaware', 'August 2023 - Current'],
        },
        {
            title: 'Teaching Assistant for CISC106: General CS for Engineers',
            desc: ['University of Delaware', 'August 2022 – December 2022'],
        },
        {
            title: 'Pool Manager/Supervisor and Valet Driver',
            desc: ['Applecross Club Operations LLC', 'May 2021 – August 2022'],
        },
    ];

    const merit: NestedListItem[] = [
        {
            title: 'Outstanding Junior Award',
            desc: ['2023'],
        },
        {
            title: 'Dr. Marion Wiley Memorial Award',
            desc: ['2023'],
        },
        {
            title: 'Presidential Achievement - Marconetti Scholarship',
            desc: ['2022 - Current'],
        },
    ];

    const extracurricular: NestedListItem[] = [
        {
            title: 'Charity Livestream Producer',
            desc: [
                'Raised over $1000 for the AbleGamers Foundation and the Chester County Foodbank',
                'December 2018 - Current',
            ],
        },
        {
            title: 'President of the Game Design & Development Club',
            desc: [
                'UD registered student organization with approximately 150 members',
                'Hosting workshops, game jams, and fostering a collaborative environment',
                'October 2022 - Current',
            ],
        },
    ];

    return (
        <FlexContainer>
            <h2>GPA: {`${gpa}`}</h2>
            <h3>
                Email{' '}
                <span style={{ color: 'var(--highlight)' }}>
                    michael.j.bocelli@gmail.com
                </span>{' '}
                for a more detailed, PDF formatted resume.
            </h3>
            <Subheader>Education</Subheader>
            <NestedList NestedListItems={education} />
            <Subheader>Experience</Subheader>
            <NestedList NestedListItems={experience} />
            <Subheader>Merit</Subheader>
            <NestedList NestedListItems={merit} />
            <Subheader>Extracurricular</Subheader>
            <NestedList NestedListItems={extracurricular} />
        </FlexContainer>
    );
}
