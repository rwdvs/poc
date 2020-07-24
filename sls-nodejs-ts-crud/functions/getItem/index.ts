import { Handler, Context, Callback } from 'aws-lambda';

interface IResponse {
   statusCode: number;
   body: string;
}

const getItem: Handler = (event: any, context: Context, callback: Callback) => {

    const id = event.id;
    console.log('id', id);

    const arr = [
        "Dima", "Dimon", "Dmitry", "Dimka"
    ]


    const response: IResponse = {
      statusCode: 200,
      body: JSON.stringify({
        name: arr[id]
      })
    };
    callback(null, response);
 };
 
 export { getItem }
 