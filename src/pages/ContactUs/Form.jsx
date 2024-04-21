import { useToast } from "@/components/ui/use-toast"
const Form = () => {
    const { toast } = useToast()
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            toast({
                title: "Form sent successfully!",
                message: "We have received your message and will get back to you shortly!",
                type: "success"
            });
        }
    };
    return (
        <div>
            <form
                onSubmit={onSubmit}
            >
                <div className='flex flex-col space-y-5'>
                    <div className='flex flex-col'>
                        <label id='name' >Name</label>
                        <input type='text'
                            className='border-b border-gray-300 p-2 outline-none'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label id='email' >Phone Number</label>
                        <input type='email'
                            className='border-b border-gray-300 p-2 outline-none'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label id='email' >Email</label>
                        <input type='email'
                            className='border-b border-gray-300 p-2 outline-none'
                        />
                    </div>

                    <div className='flex flex-col'>
                        <label id='message' >Message</label>
                        <textarea
                            className='border-b border-gray-300 p-2 outline-none'
                            rows={4}
                        />
                    </div>
                    <button
                        className='bg-[#3C506D] text-white p-2 rounded-md'
                    >Submit
                    </button>

                </div>
            </form>
        </div>
    )
}

export default Form