import { Input } from '../../components/Input'

const SignUp = () => {
    return (
        <main className="h-screen w- flex  w-screen item-center">
            <div className="bg-blue-800 flex-1 hidden xl:block"></div>

            <div className="p-10 flex flex-col w- gap-5 h-full justify-center items-center  w-full xl:w-[50%]">
                <form action="" className="w-[400px] flex flex-col space-y-6">
                    <Input label="Nome" name="name" placeholder="Nome" />
                    <Input label="Nome" name="name" placeholder="Nome" />
                </form>
            </div>
        </main>
    )
}

export default SignUp
