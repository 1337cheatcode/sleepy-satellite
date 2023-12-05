import {component$, useComputed$, useStyles$, useSignal, $, useStore} from '@builder.io/qwik';
import json from '../data';
import styles from './index.css?inline';
import '../style/demo-styling.css';

export default component$(()=>{
  useStyles$(styles);
  const cariNama = useSignal(''),
        cariAsal = useSignal(''),
        sortiran = useStore<{attr:string,isDesc:boolean}[]>([]),
        processedJSON = useComputed$(()=>json.filter(({nama,asal})=>nama.toLowerCase().includes(cariNama.value.toLowerCase())&&asal.toLowerCase().includes(cariAsal.value.toLowerCase())).sort((a,b)=>((selisih=>selisih?selisih:0)(sortiran.map(({attr,isDesc})=>b[attr]==a[attr]?0:isDesc?(a[attr]<b[attr]?1:-1):(b[attr]<a[attr]?1:-1)).filter(s=>s!=0)[0]))));

  //function addSort(colName){(i=>i<0?sortiran.unshift({attr:colName,isDesc:false}):((s=>{if(!s.isDesc)s.isDesc=true;sortiran.splice(i,1)})(sortiran[i])))(sortiran.findIndex(({attr})=>attr==colName))}
  //function addSort(colName){(i=>i<0?sortiran.unshift({attr:"no",isDesc:false}):((s=>{if(!s.isDesc)s.isDesc=true;sortiran.splice(i,1)})(sortiran[i])))(sortiran.findIndex(({attr})=>attr=="no"))}
  //function addSort(colName){(i=>i<0?sortiran.unshift({attr:"nama",isDesc:false}):((s=>{if(!s.isDesc)s.isDesc=true;sortiran.splice(i,1)})(sortiran[i])))(sortiran.findIndex(({attr})=>attr=="nama"))}
  //function addSort(colName){(i=>i<0?sortiran.unshift({attr:"asal",isDesc:false}):((s=>{if(!s.isDesc)s.isDesc=true;sortiran.splice(i,1)})(sortiran[i])))(sortiran.findIndex(({attr})=>attr=="asal"))}
  //function addSort(colName:string){sortiran.unshift({attr:colName,isDesc:false})}
  const addSort = $((colName:string)=>(i=>i<0?sortiran.unshift({attr:colName,isDesc:false}):((s=>{if(i>0){s.isDesc=false;sortiran.unshift(s)}else if(!s.isDesc){s.isDesc=true;sortiran.unshift(s)}})(sortiran.splice(i,1)[0])))(sortiran.findIndex(({attr})=>attr==colName)));
  const markSort = (colName:string)=>((i=>!(i<0)&&(sortiran[i].isDesc?<span>↓{i+1}</span>:<span>↑{i+1}</span>))(sortiran.findIndex(({attr})=>attr==colName)))

  return (<>
    <div class="header">
      <div id="pencarian">
        <input id="cari-nama" placeholder="Nama" bind:value={cariNama}/>
        <input id="cari-asal" placeholder="Asal" bind:value={cariAsal}/>
      </div>
    </div>
    <div id="content">
      <table>
        <thead>
          <th onPointerUp$={(ev)=>{if(ev.button==0)addSort("no")}}>Nomor Induk {markSort('no')}</th>
          <th onPointerUp$={(ev)=>{if(ev.button==0)addSort("nama")}}>Nama {markSort('nama')}</th>
          <th onPointerUp$={(ev)=>{if(ev.button==0)addSort("asal")}}>Asal {markSort('asal')}</th>
        </thead>
        <tbody>
          {processedJSON.value.map(({no,nama,asal})=><tr key={no} onPointerUp$={(ev)=>{if(ev.button==0)window.location.href=no}}>
            <td style="text-align:center;">{no}</td>
            <td>{nama}</td>
            <td>{asal}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  </>)})