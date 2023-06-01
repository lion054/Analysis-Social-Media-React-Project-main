import {
  filtring_by_date,
  Filter_data_by_language,
  Languages_used,
} from "../component/filtring_function";
import Navbar from "../component/Navbar/Navbar";
import React from "react";
import Pie_chart from "./pie_chart";
import "./chart.css";
const Analyse_by_language = ({ trump_data }) => {
  let Languages_used_array;
  let result;
  Languages_used_array = Languages_used(trump_data);
  result = Filter_data_by_language(trump_data, Languages_used_array);
  return (
    <div>
      <h1> Analysis By Language</h1>
      <div className="analyse_by_language">
        {result.map((one_table) => {
          return (
            <div className="chart-item">
              <p>
                <h1>{one_table[0].Language}</h1>
                <Pie_chart key={one_table.N} trump_data={one_table}></Pie_chart>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Analyse_by_language;
