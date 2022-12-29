import Head from 'next/head'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

const SignUp = () => {
    return (
        <>
            <Head>
                <title>TwT Signup</title>
                <meta name="description" content="Crie sua conta no TwiTiTi" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="h-screen w- flex  w-screen item-center">
                <div className="bg-blue-800 flex-1 hidden xl:block"></div>

                <div className="p-10 flex flex-col w- gap-7 h-full justify-center items-center  w-full xl:w-[50%]">
                    <div className="flex flex-col gap-4 w-[400px]">
                        <Button
                            icon="/googleLogo.svg"
                            text="Entrar com o Google"
                            variant="outlineGoogle"
                        />
                        <Button
                            icon="/GitHub-Mark.png"
                            text="Entrar com o GitHub"
                            variant="outlineGithub"
                        />
                    </div>

                    <div className="h-6 w-[400px] flex items-center justify-center">
                        <div className="absolute bg-white p-4 rounded-full text-sm font-light border">
                            Ou
                        </div>
                        <div className="border border-b-gray-600/[0.4] w-[400px] flex justify-center"></div>
                    </div>
                    <div className="w-[400px]">
                        <h1 className="text-3xl font-semibold">
                            Crie sua conta
                        </h1>
                    </div>
                    <form
                        action=""
                        className="w-[400px] flex flex-col space-y-6"
                    >
                        <Input
                            label="Nome"
                            name="name"
                            placeholder="Digite seu Nome"
                        />

                        <Input
                            label="E-mail"
                            name="email"
                            placeholder="Digite um Email"
                        />

                        <Input
                            label="Senha"
                            name="password"
                            placeholder="Digite uma Senha"
                        />
                        <div className="flex flex-col gap-4">
                            <Button text="Cadastra-se" variant="blue" />
                        </div>
                    </form>
                    <div className="flex gap-2 text-sm font-light mt-5">
                        <h4>Já tem conta?</h4>
                        <a
                            href="/"
                            className="transition-all text-sky-700 font-normal hover:text-sky-400"
                        >
                            Entrar
                        </a>
                    </div>
                </div>
            </main>
        </>
    )
}

export default SignUp
