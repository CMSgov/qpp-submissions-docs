import envConfig from '../envConfig';

import '../styles/shared/api-example.scss';

export interface IApiExample {
  verb: string;
  url: string;
  rows?: IApiExampleTableBody[];
}

// the class will be applied to the td that is in the same array position as the row text
export interface IApiExampleTableBody {
  row: string[];
  classes?: string[];
}

const buildTableBody = (rows: IApiExampleTableBody[]) =>
  <tbody>
    {rows.map(({ row, classes }, i) =>
      <tr key={i}>
        {row.map((td, j) =>
          envConfig.htmlRegex.test(td)
            ? <td key={j} className={classes && classes[j]} dangerouslySetInnerHTML={{ __html: td }} />
            : <td key={j} className={classes && classes[j]}>{td}</td>,
        )}
      </tr>,
    )}
  </tbody>;

export const ApiExample = ({ data }: { data: IApiExample }) => {
  const { verb, url, rows } = data;

  return (
    <div id='api-example'>

      <div>
        <span className='verb'>
          <code>{verb}</code>
        </span>
        <span className='url'>
          <code>{url}</code>
        </span>
      </div>

      {rows &&
        <table>{buildTableBody(rows)}</table>
      }
    </div>
  );
};
