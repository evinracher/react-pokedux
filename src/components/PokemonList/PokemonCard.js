import React from 'react';
import { Image, Label, Grid, Icon } from 'semantic-ui-react';
import { MAIN_COLOR, FAV_COLOR } from '../../utils/constants';
import './styles.css';

const PokemonCard = ({ pokemon }) => {
  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className='PokemonCard'>
        <Icon name="favorite" color={FAV_COLOR}></Icon>
        <Image
          centered
          src={pokemon.sprites.front_default}
          alt="pokemon image" />
        <p className='PokemonCard-title'>{pokemon.name}</p>
        {pokemon.types.map(item => <Label key={pokemon.id + item.type.name} color={MAIN_COLOR}>{item.type.name}</Label>)}
      </div>
    </Grid.Column>
  );
};

export default PokemonCard;