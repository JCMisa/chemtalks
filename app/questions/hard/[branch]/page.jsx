'use client'

import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { chatSession } from '@/utils/GeminiAIModal'

const HardQuestionPage = ({ params }) => {
    const [hardQuestion, setHardQuestion] = useState()

    const generateAiQuestion = async () => {
        const prompt = `Generate 1 JSON format with properties question which is a hard difficulty question about ${params?.branch}, options property which is an array of string with 3 elements maximum, and answer property with a value of the correct answer from the options array property.`;
        try {
            const result = await chatSession.sendMessage(prompt);
            if (result) {
                setHardQuestion(result.response.text());
                console.log("hard question: ", result.response.text());
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
        <div>HardQuestionPage</div>
    )
}

export default HardQuestionPage