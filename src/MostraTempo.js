import React from 'react';

const MostraTempo = props => {
  const tempo = props.tempo;
  const minutos = Math.round(tempo / 60);
  const segundos = tempo % 60;
  const minutosString = minutos < 10 ? '0' + minutos : minutos;
  const segundosString = segundos < 10 ? '0' + segundos : segundos;
  return (
    <p className='tempo'>
      <span>{`${minutosString}:${segundosString}`}</span>
      <br />
      Tempo médio por volta
    </p>
  );
};

export default MostraTempo;
