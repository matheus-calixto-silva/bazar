import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import lotesService from '../../services/lotesService';
import produtosService from '../../services/produtosService';
import orgaosDonatariosService from '../../services/orgaosDonatariosService';
import orgaosFiscalizadoresService from '../../services/orgaosFiscalizadoresService';

import Lote from '../../components/Lote/Lote';
import Produto from '../../components/Produto/Produto';
import Donatario from '../../components/Donatario/Donatario';
import Fiscalizador from '../../components/Fiscalizador/Fiscalizador';

const Home = () => {
  const [lotes, setLotes] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [donatarios, setDonatarios] = useState([]);
  const [fiscalizadores, setFiscalizadores] = useState([]);
  const [currentMenu, setCurrentMenu] = useState('');
  const [arrayCurrentMenu, setCurrentArrayMenu] = useState([]);
  console.log(currentMenu);

  useEffect(() => {
    lotesService.getAll().then((lotes) => {
      setLotes(lotes);
    });
  }, []);

  useEffect(() => {
    produtosService.getAll().then((produtos) => {
      setProdutos(produtos);
    });
  }, []);

  useEffect(() => {
    orgaosDonatariosService.getAll().then((donatarios) => {
      setDonatarios(donatarios);
    });
  }, []);

  useEffect(() => {
    orgaosFiscalizadoresService.getAll().then((fiscalizadores) => {
      setFiscalizadores(fiscalizadores);
    });
  }, []);

  const handleChangeCurrentMenu = (menu) => {
    setCurrentMenu(menu);
    menu === 'produtos'
      ? setCurrentArrayMenu(produtos)
      : menu === 'donatarios'
      ? setCurrentArrayMenu(donatarios)
      : menu === 'fiscalizadores' ? setCurrentArrayMenu(fiscalizadores) : setCurrentArrayMenu(lotes);
  };

  return (
    <div className='flex flex-row'>
      {/*side Bar*/}
      <div className='flex flex-col justify-between w-16 h-screen bg-white border-r'>
        <div>
          <div className='inline-flex items-center justify-center w-16 h-16'>
            <span className='block w-10 h-10 bg-gray-200 rounded-lg'></span>
          </div>

          <div className='border-t border-gray-100'>
            <nav className='flex flex-col p-2'>
              <ul className='pt-4 space-y-1 border-gray-100'>
                {/*produtos*/}
                <li onClick={() => handleChangeCurrentMenu('produtos')}>
                  <Link
                    to={''}
                    className='flex relative group justify-center px-2 py-1.5 text-gray-500 rounded hover:bg-gray-50 hover:text-gray-700'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-5 h-5 opacity-75'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z'
                      />
                    </svg>

                    <span className='absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100'>
                      Produtos
                    </span>
                  </Link>
                </li>

                {/*donatarios*/}
                <li onClick={() => handleChangeCurrentMenu('donatarios')}>
                  <Link
                    to={''}
                    className='flex justify-center px-2 py-1.5 text-gray-500 rounded hover:bg-gray-50 hover:text-gray-700 relative group'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-5 h-5 opacity-75'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'
                      />
                    </svg>

                    <span className='absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100'>
                      Donatarios
                    </span>
                  </Link>
                </li>

                {/*fiscalizadores*/}
                <li onClick={() => handleChangeCurrentMenu('fiscalizadores')}>
                  <Link
                    to={''}
                    className='flex justify-center px-2 py-1.5 text-gray-500 rounded hover:bg-gray-50 hover:text-gray-700 relative group'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-5 h-5 opacity-75'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                      />
                    </svg>

                    <span className='absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100'>
                      Fiscalizadores
                    </span>
                  </Link>
                </li>

                {/*lotes*/}
                <li onClick={() => handleChangeCurrentMenu('lotes')}>
                  <Link
                    to={''}
                    className='flex justify-center px-2 py-1.5 text-gray-500 rounded hover:bg-gray-50 hover:text-gray-700 relative group'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-5 h-5 opacity-75'
                      fill='none'
                      viewBox='0 0 22 22'
                      stroke='currentColor'
                      strokeWidth='2'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z'
                      />
                    </svg>

                    <span className='absolute text-xs font-medium text-white bg-gray-900 left-full ml-4 px-2 py-1.5 top-1/2 -translate-y-1/2 rounded opacity-0 group-hover:opacity-100'>
                      Lotes
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* cards */}
      <section>
        <div className='max-w-screen-xl w-screen px-4 py-8 mx-auto'>
          <div className='flex justify-between justify-items-stretch items-center'>
            <h2 className='mt-1 text-2xl font-extrabold tracking-wide uppercase lg:text-3xl'>
              {currentMenu.length === 0
                ? 'Selecione uma opção no menu ao lado'
                : currentMenu === 'produtos'
                ? 'Produtos'
                : currentMenu === 'donatarios'
                ? 'Donatarios'
                : currentMenu === 'fiscalizadores'
                ? 'Novo Fiscalizador'
                : 'Novo Lote'}
            </h2>
            <Link to={`${currentMenu}/new`}>
              {' '}
              {currentMenu.length === 0
                ? ''
                : currentMenu === 'produtos'
                ? 'Novo produto'
                : currentMenu === 'donatarios'
                ? 'Novo Donatario'
                : currentMenu === 'fiscalizadores'
                ? 'Novo Fiscalizador'
                : 'Novo Lote'}
            </Link>
          </div>

          <div className='grid grid-cols-2 mt-8 lg:grid-cols-4 gap-x-4 gap-y-8'>
            {currentMenu === 'produtos' &&
              arrayCurrentMenu.map((produto, i) => (
                <Produto produto={produto} key={i} />
              ))}
            {currentMenu === 'donatarios' &&
              arrayCurrentMenu.map((donatario, i) => (
                <Donatario donatario={donatario} key={i} />
              ))}
            {currentMenu === 'fiscalizadores' &&
              arrayCurrentMenu.map((fiscalizador, i) => (
                <Fiscalizador fiscalizador={fiscalizador} key={i} />
              ))}
              {currentMenu === 'lotes' &&
              arrayCurrentMenu.map((lote, i) => (
                <Lote lote={lote} key={i} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
