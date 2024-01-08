import React, { useEffect, useState } from "react";
import axios from "axios";
import Language from "./Language";
import TextArea from "./TextArea";

const Translator = () => {
  const [languages, setLanguages] = useState();
  const [fromLang, setFromLang] = useState();
  const [toLang, setToLang] = useState();
  const [translated, setTranslated] = useState();
  const [textToTranslate, setTextToTranslate] = useState();

  const getLanguages = async () => {
    const options = {
      method: "GET",
      url: "https://text-translator2.p.rapidapi.com/getLanguages",
      headers: {
        "X-RapidAPI-Key": "f16670ae6dmsh97918584da006b1p1cf458jsn1585689ea44c",
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      setLanguages(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getLanguages();
  }, []);

  const translate = async () => {
    const encodedParams = new URLSearchParams();
    encodedParams.set("source_language", fromLang);
    encodedParams.set("target_language", toLang);
    encodedParams.set("text", textToTranslate);

    const options = {
      method: "POST",
      url: "https://text-translator2.p.rapidapi.com/translate",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "717170bc58mshd3365ed714e9516p176f43jsna620b8e81d99",
        "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
      },
      data: encodedParams,
    };

    try {
      const response = await axios.request(options);
      setTranslated(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fromHandler = (value) => {
    setFromLang(value);
  };
  const toHandler = (value) => {
    setToLang(value);
  };
  const changeHandler = (value) => {
    setTextToTranslate(value);
  };

  console.log("from", fromLang);
  console.log("to", toLang);
  return (
    <div className="bg-purple-200 h-[100vh]">
      <h1 className="text-[32px] font-semibold text-center">Text Translator</h1>

      <Language
        data={languages}
        from={fromLang}
        to={toLang}
        fromHandler={fromHandler}
        toHandler={toHandler}
      />
      <div className="flex justify-center w-full gap-5 my-8">
        <TextArea changeHandler={changeHandler} change={textToTranslate} />
        <div>
          <p className="w-[300px] h-[165px] pl-2 bg-white  rounded-md">
            {translated && translated.data && translated.data.translatedText ? (
              <p className="text-[24px]">{translated.data.translatedText}</p>
            ) : (
              <p className="text-[24px]"></p>
            )}
          </p>
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={translate}
          className="text-center p-2 px-8 rounded-md bg-red-500 text-white"
        >
          Translate
        </button>
      </div>
      <div className="my-4 text-center">
        {!fromLang || !toLang ? (
          <>
            <p className="font-semibold text-red-500 text-[14px]">
              Please Select Both Langauges
            </p>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Translator;
