import React, { useEffect } from "react";
import axios from "axios";
import { BsFillPencilFill } from "react-icons/bs";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useParams, useNavigate, useLocation } from "react-router-dom";
function Search({ Fetch }) {
  const URL = process.env.REACT_APP_URL;
  const { String } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const Data = location.state.Arr;

  const NewData = [];

  for (let i = 0; i < Data.length; i++) {
    if (Data[i].isimportant === true) {
      NewData.unshift(Data[i]);
    } else {
      NewData.push(Data[i]);
    }
  }
  const CheckMarkImportant = async (id) => {
    try {
      const data = await axios.put(`${URL}MarkImportant/${id}`, {
        headers: "Access-Control-Allow-Methods",
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!String) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      {NewData.map((e) => {
        return (
          <div key={e._id} className="pt-[2rem]">
            {/* <div className="bg-white pb-[1rem] sm:pb-[2rem] lg:pb-[3rem]">
              <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-100 rounded-lg gap-4 p-4 md:p-8">
                  <div>
                    <h2 className="text-indigo-500 text-xl md:text-2xl font-bold">
                      {e.Title}
                    </h2>
                    <details className="w-full border rounded-lg">
                      {e.tasks.map((e) => {
                        return (
                          <div
                            key={e._id}
                            className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400"
                          >
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400 testing">
                              {e.task}
                            </p>
                          </div>
                        );
                      })}
                    </details>
                  </div>

                  <span>
                    {" "}
                    <BsFillPencilFill />
                  </span>
                </div>
              </div>
            </div> */}

            {e.isimportant === true ? (
              <div>
                <div className="bg-white pb-[1rem] sm:pb-[2rem] lg:pb-[3rem]">
                  <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                    <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-100 rounded-lg gap-4 p-4 md:p-8">
                      <div>
                        <h2 className="text-indigo-500 text-xl md:text-2xl font-bold">
                          {e.Title}
                        </h2>
                        <details className="w-full border rounded-lg">
                          {e.tasks.map((e) => {
                            return (
                              <div
                                key={e._id}
                                className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400"
                              >
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400 testing">
                                  {e.task}
                                </p>
                              </div>
                            );
                          })}
                        </details>
                      </div>

                      <div
                        className="flex gap-[30px]"
                        onClick={() => {
                          CheckMarkImportant(e._id);
                        }}
                      >
                        {" "}
                        <span>
                          {" "}
                          <BsFillPencilFill />
                        </span>
                        <span>
                          {e.isimportant === true ? (
                            <AiFillStar />
                          ) : (
                            <AiOutlineStar />
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div key={e._id} className="pt-[2rem]">
                  <div className="bg-white pb-[1rem] sm:pb-[2rem] lg:pb-[3rem]">
                    <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                      <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-100 rounded-lg gap-4 p-4 md:p-8">
                        <div>
                          <h2 className="text-indigo-500 text-xl md:text-2xl font-bold">
                            {e.Title}
                          </h2>
                          <details className="w-full border rounded-lg">
                            {e.tasks.map((e) => {
                              return (
                                <div
                                  key={e._id}
                                  className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400"
                                >
                                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400 testing">
                                    {e.task}
                                  </p>
                                </div>
                              );
                            })}
                          </details>
                        </div>
                        <div
                          className="flex gap-[30px]"
                          onClick={() => {
                            CheckMarkImportant(e._id);
                          }}
                        >
                          {" "}
                          <span>
                            {" "}
                            <BsFillPencilFill />
                          </span>
                          <span>
                            {e.isimportant === true ? (
                              <AiFillStar />
                            ) : (
                              <AiOutlineStar />
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Search;
