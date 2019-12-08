import React from 'react';

import { IApodData } from '../../store/apod';

interface Props {
  apodData: IApodData;
}

export const APODDisplay: React.FC<Props> = ({ apodData }: Props) => (
  <div className="apod__display">
    <div className="apod__image-wrapper">
      <img className="apod__image" src={apodData.url} alt={apodData.title} />
      <a className="apod__image-link" href={apodData.hdurl} target="_blank" rel="noopener noreferrer">
        Get image in high resolution
      </a>
    </div>
    <div className="apod__content">
      <h2 className="apod__title">{apodData.title}</h2>
      <p className="apod__description">{apodData.explanation}</p>
      <small className="apod__date">{apodData.date}</small>
    </div>
  </div>
);
