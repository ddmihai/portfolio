import axios, { AxiosError } from "axios";
import React, { FormEvent, useState } from "react";
import { MdEmail } from "react-icons/md"
import { PiPhone } from "react-icons/pi"





const ContactForm = () => {

    const sendEmailUrl = 'https://portfolio-email-serverside-e7011643d9ae.herokuapp.com/email/send';

    const [email, setEmail] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [content, setContent] = useState<string>('');



    const sendEmail = async (event: FormEvent) => {
        event.preventDefault();

        try {
            const response = await axios.post(sendEmailUrl, {
                email,
                subject,
                content
            });

            if (response.status === 200) {
                alert('Email sent successfully!');
                setEmail('');
                setSubject('');
                setContent('');
            }
        }

        catch (error) {
            if (error instanceof AxiosError) {
                console.log(error.response?.data);
                alert(error.response?.data);
            }
            else {
                console.log(error);
            }
        }
    }



    return (
        <section className="mx-auto max-w-screen-xl px-4 md:px-8 mt-16 py-10">

            <aside className="flex flex-wrap items-center gap-3 w-full">
                <div className="flex items-center gap-3 p-5 bg-indigo-50 rounded-xl">
                    <PiPhone size={30} className="text-indigo-600" />
                    <p>
                        <span className="text-indigo-600 mr-2">UK:</span>
                        <a className="underline" href={'tel:'}>07887637239</a>
                    </p>
                </div>

                <div className="flex items-center gap-3 p-5 bg-indigo-50 rounded-xl">
                    <MdEmail size={30} className="text-indigo-600" />
                    <p>
                        <span className="text-indigo-600 mr-2">Email:</span>
                        <a className="underline" href={'mailto:'}>sasdaniel9@gmail.com</a>
                    </p>
                </div>

                <div className="flex items-center gap-3 p-5 bg-indigo-50 rounded-xl">
                    <PiPhone size={30} className="text-indigo-600" />
                    <p>
                        <span className="text-indigo-600 mr-2">RO:</span>
                        <a className="underline" href={'tel:'}>0727967474</a>
                    </p>
                </div>
            </aside>


            <form className="mt-10" onSubmit={sendEmail}>
                <div className="md:flex flex-wrap gap-5 max-w-5xl">
                    <div className="flex flex-col flex-1">
                        <label htmlFor="name">Your email</label>
                        <input
                            value={email}
                            onChange={((event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value))}
                            type="email"
                            placeholder="email@client.com"
                            name="name"
                            id="name"
                            required
                            minLength={5}
                            className="border py-2 px-5 rounded-xl"
                        />
                    </div>
                    <div className="flex flex-col flex-1">
                        <label htmlFor="subject">Subject</label>
                        <input
                            value={subject}
                            onChange={((event: React.ChangeEvent<HTMLInputElement>) => setSubject(event.target.value))}
                            type="text"
                            placeholder="Subject..."
                            name="subject"
                            id="subject"
                            required
                            minLength={5}
                            className="border py-2 px-5 rounded-xl"
                        />
                    </div>
                </div>
                <div className="flex flex-col flex-1 max-w-5xl mt-10">
                    <label htmlFor="message">Message</label>
                    <textarea
                        value={content}
                        onChange={((event: React.ChangeEvent<HTMLTextAreaElement>) => setContent(event.target.value))}
                        placeholder="Message..."
                        name="message"
                        id="message"
                        required
                        minLength={5}
                        className="border py-2 px-5 rounded-xl min-h-[200px]"
                    />
                </div>

                <button type="submit" className="text-white py-2 px-6 max-w-fit rounded-xl bg-indigo-600 mt-10">
                    Send email
                </button>
            </form>


        </section>

    )
}

export default ContactForm
