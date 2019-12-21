import React from 'react';
import * as O from 'fp-ts/es6/Option';
import { pipe } from "fp-ts/es6/pipeable";
import { constant } from "fp-ts/es6/function";

interface Data {
  description: string;
  nasa_id: string;
  title: string;
  keywords: string[];
  date_created: string;
  media_type: string;
  center: string;
}

interface Links {
  render: string;
  href: string;
  rel: string;
}

interface Props {
  data: {
    data: O.Option<Data>,
    links: O.Option<Links>
  };
}

export const LibraryItem: React.FC<Props> = ({ data: {
  data,
  links,
} }: Props) => (
  <>
    {
      pipe(
        data,
        O.chain(data => pipe(
          links,
          O.map(links => (
            <li className="library__item">
              <img src={links.href} />
              <span className="library__item-title">{data.title}</span>
            </li>
          ))
        )),
        O.getOrElse(constant(<></>))
      )
    }
  </>
);
