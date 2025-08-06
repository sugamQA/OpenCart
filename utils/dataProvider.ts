import fs from 'fs';
import { parse } from 'csv-parse/sync';

export class DataProvider{

static getTestDataFromJson(filePath:string)
{
    let data:any =JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return data;
}


static getTestDataFromCsv(filePath:string)
{
     let data:any= parse(fs.readFileSync(filePath),{columns:true,skip_empty_lines:true})
    return data;
    }


}