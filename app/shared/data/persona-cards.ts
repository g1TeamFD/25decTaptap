import { PersonaCard } from '../models/persona-card.model';

export const personaCards: PersonaCard[] = [
    {
        id: 'positivity-architect',
        title: 'The Positivity Architect',
        description: 'Converting Risks into Opportunities',
        image: '~/images/positivity-architect.png',
        skills: [
            { name: 'Critical thinking', rating: 4 },
            { name: 'Adaptive thinking', rating: 3 },
            { name: 'Collaboration', rating: 5 },
            { name: 'Strategic foresight', rating: 4 },
            { name: 'Experimental Innovation', rating: 3 },
            { name: 'Resilience', rating: 4 },
            { name: 'Risk mitigation', rating: 4 }
        ]
    }
    // Add other persona cards here
];