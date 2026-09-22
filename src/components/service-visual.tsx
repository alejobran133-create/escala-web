import { useId } from "react";

export type ServiceId = "estrategia" | "estructuracion" | "diseno" | "tecnologia" | "ia" | "datos" | "mejora";
const labels: Record<ServiceId, string> = {
  estrategia: "Análisis de mercado: explorar información, comparar opciones y decidir.",
  estructuracion: "Estructura empresarial: roles conectados y procesos documentados.",
  diseno: "Diseño de marca: tipografía, paleta de color y composición visual.",
  tecnologia: "Tecnología: una interfaz web y su adaptación a un dispositivo móvil.",
  ia: "Automatización: conectar una entrada, reglas, tareas y una salida.",
  datos: "Inteligencia de negocio: transformar datos organizados en una lectura visual.",
  mejora: "Mejora empresarial: revisar un proceso y simplificar sus conexiones.",
};
function Sheet({ x, y, width = 170, height = 190, children }: {x:number;y:number;width?:number;height?:number;children?:React.ReactNode}) {
  return <g transform={`translate(${x} ${y})`}><rect width={width} height={height} rx="8" fill="white" stroke="#ddd5d4" />{children}</g>;
}
function Line({x=22,y,width=110}:{x?:number;y:number;width?:number}) {return <path d={`M${x} ${y}h${width}`} stroke="#d8d0cf" strokeWidth="4" strokeLinecap="round" />;}
function Label({x,y,children,accent=false}:{x:number;y:number;children:React.ReactNode;accent?:boolean}) {return <text x={x} y={y} fill={accent ? "var(--color-brand)" : "#565050"} fontSize="12" letterSpacing="1.5">{children}</text>;}
export function ServiceVisual({ service }: { service: ServiceId }) {
 const id = useId();
 return <svg className="service-visual" viewBox="0 0 620 330" role="img" aria-labelledby={id}>
  <title id={id}>{labels[service]}</title>
  <circle cx="327" cy="164" r="130" fill="#eee8e6" opacity=".5" />
  <g strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
   {service === "estrategia" && <>
    <Sheet x={115} y={48} width={193} height={228}><Label x={22} y={33}>MERCADO</Label><Line y={53} width={120}/><Line y={72} width={78}/><path d="M24 191V104m0 87h143" stroke="#d8d0cf"/><rect x="42" y="142" width="23" height="49" rx="3" fill="#d8bcc5"/><rect x="85" y="120" width="23" height="71" rx="3" fill="#aa6f83"/><rect x="128" y="98" width="23" height="93" rx="3" fill="var(--color-brand)"/></Sheet>
    <Sheet x={330} y={84} width={177} height={174}><Label x={22} y={32}>PERSPECTIVA</Label>{["Explorar","Comparar","Decidir"].map((s,i)=><g key={s}><circle cx="27" cy={65+i*36} r="8" fill={i===2?"var(--color-brand)":"#f0e7ea"}/><text x="46" y={69+i*36} fill="#4d4447" fontSize="15">{s}</text></g>)}</Sheet>
   </>}
   {service === "estructuracion" && <>
    <path d="M310 107v34M166 185v-44h288v44M310 141v44" stroke="#bc96a3" fill="none"/>
    <rect x="237" y="51" width="146" height="57" rx="6" fill="var(--color-brand)"/><text x="310" y="86" textAnchor="middle" fill="white" fontSize="15">Organización</text>
    {["Roles","Procesos","Documentación"].map((s,i)=><g key={s} transform={`translate(${99+i*144} 182)`}><rect width="134" height="93" rx="6" fill="white" stroke="#d8d0cf"/><path d="M22 23h48m-48 12h70" stroke="#d8d0cf" strokeWidth="3"/><text x="67" y="66" textAnchor="middle" fontSize="13" fill="#51474b">{s}</text></g>)}
   </>}
   {service === "diseno" && <>
    <Sheet x={113} y={44} width={214} height={241}><text x="26" y="104" fontFamily="Georgia,serif" fontSize="82" fill="var(--color-brand)">Aa</text><Label x={27} y={134}>IDENTIDAD VISUAL</Label><Line x={27} y={157} width={157}/>{["#701f38","#b77a8d","#e6d3da","#242024"].map((c,i)=><rect key={c} x={27+i*43} y="180" width="34" height="35" rx="3" fill={c}/>)}</Sheet>
    <Sheet x={350} y={78} width={153} height={202}><rect x="15" y="15" width="123" height="86" rx="2" fill="#eee3e6"/><circle cx="76" cy="58" r="24" stroke="var(--color-brand)" fill="none"/><path d="M58 71l18-38 18 38" stroke="var(--color-brand)" fill="none"/><Line x={17} y={125} width={111}/><Line x={17} y={144} width={81}/><rect x="17" y="166" width="61" height="15" rx="2" fill="var(--color-brand)"/></Sheet>
   </>}
   {service === "tecnologia" && <>
    <Sheet x={84} y={60} width={354} height={210}><path d="M0 32h354" stroke="#ddd5d4"/>{[17,29,41].map(x=><circle key={x} cx={x} cy="16" r="3" fill="#bfaeb3"/>)}<rect x="20" y="52" width="95" height="137" rx="3" fill="#f3efed"/><Line x={34} y={76} width={64}/><Line x={34} y={96} width={45}/><rect x="137" y="52" width="195" height="60" rx="3" fill="#e9d9df"/><Line x={137} y={137} width={195}/><Line x={137} y={155} width={151}/><rect x="137" y="172" width="73" height="18" rx="3" fill="var(--color-brand)"/></Sheet>
    <Sheet x={457} y={121} width={80} height={151}><rect x="7" y="19" width="66" height="120" rx="3" fill="#f3efed"/><path d="M28 9h24" stroke="#bc96a3"/><rect x="14" y="31" width="52" height="40" rx="2" fill="#e9d9df"/><Line x={15} y={87} width={46}/><Line x={15} y={103} width={34}/><rect x="15" y="118" width="33" height="11" rx="2" fill="var(--color-brand)"/></Sheet>
   </>}
   {service === "ia" && <>
    <path d="M143 166h62m94 0h62m92 0h40" stroke="#b18594" strokeDasharray="4 6" fill="none"/>
    {[["Entrada",79],["Reglas",205],["Tarea",331],["Salida",457]].map(([s,x],i)=><g key={s} transform={`translate(${x} 112)`}><rect width="85" height="97" rx="8" fill={i===1?"var(--color-brand)":"white"} stroke={i===1?"var(--color-brand)":"#ddd5d4"}/><g stroke={i===1?"white":"var(--color-brand)"} fill="none"><rect x="29" y="21" width="27" height="27" rx="4"/><path d={i===1?"M36 34h13M42 28v13":"m35 34 5 5 9-11"}/></g><text x="42" y="77" textAnchor="middle" fill={i===1?"white":"#565050"} fontSize="13">{s}</text></g>)}
    <path d="M247 113V71h126v41" stroke="#b18594" fill="none"/><Label x={256} y={59}>CONECTAR</Label>
   </>}
   {service === "datos" && <>
    <Sheet x={105} y={70} width={154} height={197}><Label x={20} y={32}>DATOS</Label>{[62,90,118,146].map(y=><g key={y}><path d={`M20 ${y}h113`} stroke="#ddd5d4"/><rect x="20" y={y-13} width="25" height="7" rx="2" fill="#bb9ba6"/><path d={`M60 ${y-10}h26m12 0h15`} stroke="#cfc4c7" strokeWidth="3"/></g>)}</Sheet>
    <path d="M275 169h34m-8-7 8 7-8 7" stroke="var(--color-brand)" fill="none"/>
    <Sheet x={326} y={54} width={191} height={222}><Label x={20} y={33}>LECTURA VISUAL</Label><path d="M24 159V68m0 91h142" stroke="#ddd5d4"/><path d="m25 143 28-25 29 12 31-36 43-20" stroke="var(--color-brand)" strokeWidth="3" fill="none"/><circle cx="156" cy="74" r="5" fill="var(--color-brand)"/><Line y={186} width={136}/><Line y={201} width={86}/></Sheet>
   </>}
   {service === "mejora" && <>
    <Label x={112} y={72}>REVISAR EL PROCESO</Label>
    <path d="M136 123h85v42h85v-42h85v42h85" stroke="#baafb2" strokeWidth="2" fill="none"/>{[[136,123],[221,165],[306,123],[391,165],[476,165]].map(([x,y])=><circle key={x} cx={x} cy={y} r="12" fill="#e7dfe1" stroke="#b9a7ad"/>)}
    <Label x={112} y={225} accent>SIMPLIFICAR LAS CONEXIONES</Label><path d="M136 265h340" stroke="var(--color-brand)" strokeWidth="2"/>{[136,306,476].map((x,i)=><g key={x}><circle cx={x} cy="265" r="15" fill={i===1?"var(--color-brand)":"white"} stroke="var(--color-brand)"/><path d={`m${x-5} 265 4 4 7-8`} fill="none" stroke={i===1?"white":"var(--color-brand)"}/></g>)}
   </>}
  </g>
 </svg>;
}
