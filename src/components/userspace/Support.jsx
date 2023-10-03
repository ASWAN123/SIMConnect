import React, { useEffect, useState } from "react";

export const Support = () => {
  let [subject, setSubject] = useState("");
  let [description, setDescription] = useState("");
  let [sent, setSent] = useState(false);

  const saveMessage = (e) => {
    e.preventDefault();
    if (subject.trim() === "") return;
    if (description.trim() === "") return;
    setSent(true);
    setDescription('')
    setSubject('')
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSent(false); 
    }, 3000);

    return () => {
      clearTimeout(timer); 
    };
  }, [sent]);








  return (
    <div className="w-full">
      <h1 className="text-[24px]  text-gray-600 mt-8">Support & assitance</h1>
      
      <form
        action=""
        onSubmit={saveMessage}
        className="mx-auto w-[50%] flex flex-col gap-3 mt-8 items-center justify-center p-4"
      >
        <input
          placeholder="Subject"
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          className=" bg-transparent text-black border h-10 border-gray-500 w-full outline-none  rounded-lg px-2 py-1 "
          type="text"
        />
        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="Description"
          className="  bg-transparent  resize-none text-black border border-gray-500 w-full outline-none  rounded-lg px-2 py-1 "
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <input
          value="Send"
          type="submit"
          className="w-fit outline-none  rounded-sm  px-6 py-3 bg-blue-500 text-white "
        />
      </form>
      {sent && <p className="text-green-400 text-[12px] mx-auto w-fit">Message has been sent</p>}
    </div>
  );
};
