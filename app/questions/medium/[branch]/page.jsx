'use client'

import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { chatSession } from '@/utils/GeminiAIModal'

const MediumQuestionPage = ({ params }) => {
    const [mediumQuestion, setMediumQuestion] = useState()

    const generateAiQuestion = async () => {
        const prompt = `Generate 1 JSON format with properties question which is a medium difficulty question about ${params?.branch}, options property which is an array of string with 3 elements maximum, and answer property with a value of the correct answer from the options array property.`;
        try {
            const result = await chatSession.sendMessage(prompt);
            if (result) {
                setMediumQuestion(result.response.text());
                console.log("medium question: ", result.response.text());
            }

        } catch (error) {
            toast(
                <p className='font-bold text-red-500 text-sm'>Internal error occured while generating questions.</p>
            )
            console.log('generate response error: ', error);
        }
    }

    useEffect(() => {
        generateAiQuestion();
    }, [])

    return (
        <div>MediumQuestionPage</div>
    )
}

export default MediumQuestionPage