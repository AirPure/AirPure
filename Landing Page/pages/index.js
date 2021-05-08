import React from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-gray-700">
                AirPure - Uma solução inteligente para o monitoramento de Qualidade do Ar Interno.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                O sistema AirPure possibilita a visualização e analise, em tempo real, de vários fatores que influenciam diretamente na qualidade do ar em um ambiente.
              </p>
              <div className="mt-12">
                <a
                  href="http://airpure.duckdns.org/airpure/"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg"
                >
                  Acessar Dashboard
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
          src={require("assets/img/pattern_nextjs.png")}
          alt="..."
        />
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-gray-200">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-gray-800">
                <img id="sobre"
                  alt="..."
                  src={require("assets/img/landing2.jpg")}
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-gray-800 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Qualidade de ar para todos.
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Um diferencial presente em poucos ambientes internos é o monitoramento da qualidade do ar. Com a implementação do sistema AirPure é possível visualizar e analisar, em tempo real, por meio de um Dashboard interativo, vários fatores que influenciam diretamente na qualidade do ar um ambiente.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Sensores
                      </h6>
                      <p className="mb-4 text-gray-600">
                        O AirPure possui diversos sensores para analisar a qualidade do ar interno do seu ambiente.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-drafting-compass"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Conectividade
                      </h6>
                      <p className="mb-4 text-gray-600">
                        A conectividade é uma preocupação crucial. Todos os dados coletados são enviados via Wi-Fi, sem necessidade de cabeamento físico.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-newspaper"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold"> Consumo</h6>
                      <p className="mb-4 text-gray-600">
                        Otimizado em todos os sentidos. O AirPure trabalha com um baixíssimo consumo de energia.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Regulamentação
                      </h6>
                      <p className="mb-4 text-gray-600">
                        Todos os parâmetros analisados pelo AirPure são baseados em normas técnicas e legislações vigentes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <br></br>
        <br></br>
        <br></br>


        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                  <a
                    href=""
                    target="_blank"
                  >
                    <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src={require("assets/img/1.jpg")}
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Ruído Sonoro
                      </p>
                    </div>
                  </a>
                  <a
                    href=""
                    target="_blank"
                  >
                    <div className="bg-blue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src={require("assets/img/3.jpg")}
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Umidade
                      </p>
                    </div>
                  </a>
                  <a
                    href=""
                    target="_blank"
                  >
                    <div className="bg-gray-800 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src={require("assets/img/5.jpg")}
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Temperatura
                      </p>
                    </div>
                  </a>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <a
                    href=""
                    target="_blank"
                  >
                    <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src={require("assets/img/2.jpg")}
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        CO2
                      </p>
                    </div>
                  </a>
                  <a
                    href=""
                    target="_blank"
                  >
                    <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src={require("assets/img/angular.jpg")}
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Luminosidade
                      </p>
                    </div>
                  </a>
                  <a
                    href=""
                    target="_blank"
                  >
                    <div className="bg-green-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src={require("assets/img/6.jpg")}
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Compostos Orgânicos Voláteis
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>


            <div className="w-full md:w-6/12 px-4">

              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Parâmetros Analisados
                      </h6>
                      <p className="mb-4 text-gray-600">
                        O sistema AirPure realiza o monitoramento de Temperatura, Umidade, Ruído e Iluminação além das concentrações de Dióxido de Carbono (CO2) e Compostos Orgânicos Voláteis Totais (COVT).
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-drafting-compass"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Vantagens
                      </h6>
                      <p className="mb-4 text-gray-600">
                        O monitoramento adequado desses fatores permite que medidas de prevenção possam ser tomadas, como por exemplo, a manutenção adequada dos aparelhos condicionadores de ar presentes nos ambientes, permitindo assim uma economia de recursos.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-newspaper"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold"> Implicações na Saúde</h6>
                      <p className="mb-4 text-gray-600">
                        Valores de temperatura e umidade estão diretamente relacionados ao conforto térmico do ambiente. Já concentrações elevadas de CO2 e COVT no ambiente podem causar danos cognitivos e aumento de sintomas neurológicos incapacitantes, como dor de cabeça e fadiga, além de irritação sensorial.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="container mx-auto px-4 pb-32 pt-48" id="dashboard">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  Dashboard intuitiva
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  Ao coletar os dados, todos são disponibilizados para os usuários em uma dashboard interativa e intuitiva.
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3">
                          <i className="fas fa-home"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">
                          Cadastro de espaços monitorados.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3">
                          <i className="fa fa-clock"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">
                          Visualização de dados em tempo real.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3">
                          <i className="fa fa-calendar"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">
                          Visualização de gráficos configuráveis por tempo de monitoramento.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3">
                          <i className="fas fa-calculator"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">
                          Cálculo do Índice de Qualidade do Ar Interno.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3">
                          <i className="fas fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">
                          Possibilidade de configuração de alertas via email e redes sociais.
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-100 mr-3">
                          <i className="fas fa-book"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-gray-600">
                          Aderência a normas e resoluções brasileiras (NR17, NR9, etc.)
                        </h4>
                      </div>
                    </div>
                  </li>
                  <div className="mt-12">
                    <a
                      href="http://airpure.duckdns.org/airpure/"
                      className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-gray-800 active:bg-gray-700 uppercase text-sm shadow hover:shadow-lg"
                    >
                      Acessar Dashboard
                </a>
                  </div>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0" >
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={require("assets/img/documentation.png")}
              />
            </div>
          </div>
        </div>

      </section>

      <Footer />
    </>
  );
}
