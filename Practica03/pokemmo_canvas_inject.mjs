import fs from 'node:fs';

const file = 'pokemmo_business_model_canvas.html';
let html = fs.readFileSync(file, 'utf8');

const descriptions = {
  propositions: [
    '• MMO Persistente: Conecta a jugadores de PC y móviles en un ecosistema unificado.',
    '• Economía GTL: Mercado impulsado 100% por la oferta y demanda de los jugadores.',
    '• Metajuego Profundo: Optimización de EVs/IVs y PvP competitivo.',
  ],
  segments: [
    '• Fans nostálgicos: Jugadores que buscan revivir las regiones clásicas en compañía.',
    '• Competitivos (PvP): Usuarios enfocados en criar equipos perfectos para torneos.',
    '• Gamers multiplataforma: Usuarios que valoran la accesibilidad cruzada.',
  ],
  channels: [
    '• Descarga oficial: Sitio web directo para clientes de PC y móvil.',
    '• Foros de la comunidad: Guías de instalación y configuración de ROMs.',
    '• Boca a boca: Marketing orgánico impulsado por la misma comunidad.',
  ],
  relationships: [
    '• Eventos estacionales: Actualizaciones de Halloween y Año Nuevo para retención.',
    '• Moderación activa: Soporte in-game constante para evitar trampas.',
    '• Comunicación directa: Feedback constante a través de Discord y Reddit.',
  ],
  revenue: [
    '• Estatus de Donador: Suscripción premium que otorga bonificaciones (No Pay-to-Win).',
    '• Cosméticos (Reward Points): Tienda de personalización visual.',
  ],
  resources: [
    '• Infraestructura global: Servidores para miles de conexiones simultáneas.',
    '• Cliente de juego: Software basado en la lectura de ROMs externas (protección legal).',
  ],
  activities: [
    '• Mantenimiento: Estabilidad continua de servidores y bases de datos.',
    '• Balanceo competitivo: Ajustes constantes a las clasificaciones (Tiers OU, UU, NU).',
  ],
  partnerships: [
    '• Creadores de contenido: Youtubers y streamers que proveen publicidad orgánica.',
    '• Proveedores de infraestructura: Servicios de hosting y protección anti-DDoS.',
  ],
  costs: [
    '• Alojamiento y ancho de banda: El mayor gasto por la escala del MMO masivo.',
    '• Desarrollo y Moderación: Costo del personal técnico y comunitario.',
  ],
};

const escapeAttribute = (value) => value
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

for (const [id, lines] of Object.entries(descriptions)) {
  const marker = `id="node-${id}"`;
  const start = html.indexOf(marker);
  if (start < 0) throw new Error(`Archify output is missing node ${id}`);
  const end = html.indexOf('>', start);
  if (end < 0) throw new Error(`Malformed Archify node ${id}`);
  const tag = html.slice(start, end);
  if (!tag.includes('data-node-id=')) throw new Error(`Unexpected node markup for ${id}`);
  const replacement = `data-node-description="${escapeAttribute(lines.join('\n'))}"`;
  html = html.slice(0, end) + ` ${replacement}` + html.slice(end);
}

const detailStyle = `.semantic-passport-detail {
      display: block;
      margin-top: 0.42rem;
      max-height: min(11rem, 28vh);
      overflow-x: hidden;
      overflow-y: auto;
      color: var(--text-muted);
      font-size: 0.68rem;
      line-height: 1.55;
      white-space: pre-wrap;
      overflow-wrap: anywhere;
    }
    .semantic-passport-detail[hidden] { display: none; }`;
const oldStyle = `.semantic-passport-detail {
      display: block;
      margin-top: 0.12rem;
      overflow: hidden;
      color: var(--text-muted);
      font-size: 0.625rem;
      line-height: 1.4;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .semantic-passport-detail[hidden] { display: none; }`;
if (!html.includes(oldStyle)) throw new Error('Passport detail style not found');
html = html.replace(oldStyle, detailStyle);

const oldRender = "setPassportValue(detail, node.getAttribute('data-node-sublabel'));";
const newRender = "setPassportValue(detail, node.getAttribute('data-node-description') || node.getAttribute('data-node-sublabel'));";
if (!html.includes(oldRender)) throw new Error('Passport render hook not found');
html = html.replace(oldRender, newRender);

if (html.includes('archify-cards')) throw new Error('Unexpected bottom cards remain');
fs.writeFileSync(file, html, 'utf8');
console.log(`Injected ${Object.keys(descriptions).length} node descriptions into the Semantic Passport.`);
