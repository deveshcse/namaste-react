const Contact = () =>{
    return(
        <div>
            <h1 className="font-bold text-3xl p-4 m-4" >Contact Us </h1>
            <form className="m-2 p-4">
                <input type="text" placeholder="Name" className="border border-black p-2 m-2 rounded-lg">
                </input>
                <input type="text" placeholder="Message" className="border border-black p-2 m-2 rounded-lg">
                </input >
                <button className="border border-black p-2 m-2 rounded-lg bg-gray-400">Submit</button>

            </form>
        </div>
    );
};

export default Contact;