import React from 'react';
import { useDispatch } from 'react-redux';
import { Image, Label, Grid, Icon } from 'semantic-ui-react';
import { toggleFavorite } from '../../actions';
import { MAIN_COLOR, FAV_COLOR, DEFAULT_COLOR } from '../../utils/constants';
import './styles.css';

const PokemonCard = ({ pokemon }) => {
  const dispatch = useDispatch();

  const handleAddToFavorite = () => {
    dispatch(toggleFavorite(pokemon.id));
  };

  const color = pokemon.favorite ? FAV_COLOR : DEFAULT_COLOR;

  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className='PokemonCard'>
        <button className='PokemonCard-favorite' onClick={handleAddToFavorite}>
          <Icon name="favorite" color={color}></Icon>
        </button>
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