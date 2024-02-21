"use client"
import { Envelope, User } from '@phosphor-icons/react'
import { Input } from '../atoms/Input'
import { Button } from '../atoms/Button'
import { NewsletterTexts } from '../particles/DataLists'
import { useState } from 'react'
import jsonp from 'jsonp';
import {  toast } from 'react-toastify';
export const SubscribeForm = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const url = 'https://3bslab.us21.list-manage.com/subscribe/post?u=83841838e9ef133644d885676&amp;id=f89eeb58c4&amp;f_id=00aaf2e6f0';
        jsonp(`${url}&FNAME=${name}&EMAIL=${email}`, { param: 'c' }, (_,) => {
        });
        toast.success('¡Gracias por unirte a 3BSLab! 💈')
    };
    return (
        <form method='POST' onSubmit={onSubmit} className='flex md:flex-row flex-col items-stretch gap-2'>

            <Input  name='FNAME' required onChange={(e)=> setName(e.target.value)} containerClass='relative' inputClass='border-none rounded-lg outline-none w-[300px] h-[50px] focus:outline-none text-color3 pr-4 pl-9 py-1' type="text" placeholder={NewsletterTexts.placeholderName}>
                <div className='absolute top-4 left-3 text-color3/80'>
                    <User size={18} color="currentColor" weight="fill" />
                </div>
            </Input>
            <Input  name='EMAIL' required onChange={(e)=> setEmail(e.target.value)} containerClass='relative' inputClass='border-none rounded-lg outline-none w-[300px] h-[50px] focus:outline-none text-color3 pr-4 pl-9 py-1' type="email" placeholder={NewsletterTexts.placeholderText}>
                <div className='absolute top-4 left-3 text-color3/80'>
                    <Envelope size={18} color="currentColor" weight="fill" />
                </div>
            </Input>
            <Button type='submit' className='border-none outline-none bg-color3bs py-2 px-6 text-white font-light text-base rounded-lg'>
                {NewsletterTexts.buttonText}
            </Button>
        </form>
    )
}
