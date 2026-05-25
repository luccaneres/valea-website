const services = [
  {
    title: 'Laudos de Avaliação de Imóveis',
    overline: 'Avaliações urbanas e rurais',
    badge: 'ABNT NBR 14653',
    image: 'assets/images/vistoria-rural-drone-1.jpg',
    text: 'Documento técnico que determina o valor de mercado de um imóvel urbano ou rural com base em metodologia científica, dados de mercado e análise técnica fundamentada.',
    benefits: ['Valor de mercado fundamentado', 'Grau de fundamentação definido', 'Suporte para processos judiciais, inventários, partilhas e dissoluções societárias', 'Atendimento a exigências de bancos, varas cíveis, famílias e particulares'],
    when: 'Indicado para desapropriação, usucapião, divórcio, inventário, dissolução de sociedades, renegociação de dívidas e transações imobiliárias que exigem valor justo e comprovável.'
  },
  {
    title: 'Laudos de Conclusão de Obra',
    overline: 'Regularização e conformidade',
    badge: 'Habite-se e CREA',
    image: 'assets/images/campo-vistoria.jpg',
    text: 'Atesta que a edificação foi concluída conforme o projeto aprovado e as normas técnicas vigentes, apoiando regularização e segurança documental.',
    benefits: ['Regularização junto a órgãos municipais e CREA', 'Conformidade com projetos e normas técnicas', 'Tranquilidade para proprietário ou incorporador'],
    when: 'Ao final de obras residenciais, comerciais ou industriais, para obtenção do Habite-se, averbação no Registro de Imóveis e entrega formal ao contratante.'
  },
  {
    title: 'Laudo Cautelar de Vistoria de Vizinhança',
    overline: 'Prova técnica preventiva',
    badge: 'Antes da obra',
    image: 'assets/images/vistoria-vizinhanca-aerea.jpg',
    text: 'Registra as condições estruturais e de conservação dos imóveis vizinhos antes do início de uma obra, com documentação fotográfica e descritiva.',
    benefits: ['Proteção contra alegações infundadas de danos', 'Documentação detalhada do entorno', 'Suporte para ações de responsabilidade civil'],
    when: 'Antes de construção, reforma ou demolição em áreas urbanas, especialmente em condomínios e edificações vizinhas a imóveis de terceiros.'
  },
  {
    title: 'Laudos de Entrega de Obra',
    overline: 'Recebimento técnico do imóvel',
    badge: 'Entrega formal',
    image: 'assets/images/entrega-obra-aerea.jpg',
    text: 'Formaliza o recebimento do imóvel, atestando que a edificação foi concluída conforme contrato e especificações técnicas.',
    benefits: ['Documentação oficial da entrega', 'Registro das condições da unidade', 'Base para garantias e assistência técnica'],
    when: 'Na entrega de imóveis novos por construtoras, incorporadoras ou vendedores, como garantia de que o imóvel foi recebido em conformidade com o contratado.'
  },
  {
    title: 'Perícias Judiciais',
    overline: 'Engenharia como prova técnica',
    badge: 'Expert witness',
    image: 'assets/images/obra-vizinhanca.jpg',
    text: 'Provas técnicas determinadas pelo Juiz para esclarecer questões de fato relacionadas à construção civil, imóveis e relações contratuais.',
    benefits: ['Esclarecimento técnico de disputas judiciais', 'Laudo imparcial e fundamentado', 'Atuação em varas cíveis, famílias, tribunais e arbitragens', 'Disponibilidade para audiências e esclarecimentos'],
    when: 'Em ações envolvendo vícios de construção, problemas estruturais, defeitos de acabamento, inadimplemento contratual, vizinhança, partilhas e dissoluções.'
  },
  {
    title: 'Inspeção Predial',
    overline: 'Segurança e manutenção',
    badge: 'Diagnóstico predial',
    image: 'assets/images/inspecao-predial-edificio.jpg',
    text: 'Vistoria técnica completa em edificações para identificar anomalias, riscos, necessidades de manutenção e prioridades de intervenção.',
    benefits: ['Identificação precoce de riscos', 'Planejamento de manutenções preventivas e corretivas', 'Relatório técnico com recomendações', 'Prevenção de acidentes e responsabilidades legais'],
    when: 'Anualmente em condomínios residenciais e comerciais, antes de aquisições de imóveis usados ou quando houver suspeita de problemas estruturais ou de conservação.'
  },
  {
    title: 'Assistência Técnica em Engenharia Civil',
    overline: 'Consultoria e acompanhamento',
    badge: 'Obras e conflitos',
    image: 'assets/images/stephanie-capacete.jpg',
    text: 'Consultoria técnica que acompanha obras e conflitos técnicos desde a concepção até a conclusão, com análise, fiscalização e orientação independente.',
    benefits: ['Segurança na execução de obras', 'Redução de riscos de vícios construtivos', 'Suporte técnico para negociações', 'Acompanhamento imparcial da obra'],
    when: 'Durante obras residenciais, comerciais ou industriais; em contratos que exigem fiscalização independente; ou para esclarecer dúvidas técnicas entre contratante e contratada.'
  },
  {
    title: 'Manual do Proprietário',
    overline: 'Documentação do imóvel',
    badge: 'Uso e manutenção',
    image: 'assets/images/manual-proprietario.png',
    text: 'Documento que reúne informações técnicas do imóvel, sistemas construtivos, materiais, garantias, instruções de uso e manutenção.',
    benefits: ['Documentação completa e organizada', 'Orientação de uso e manutenção preventiva', 'Redução de chamados de assistência técnica', 'Cumprimento de exigências legais'],
    when: 'Na entrega de imóveis novos, incorporações e loteamentos, como documentação obrigatória junto ao CREA e instrumento de transparência com o comprador.'
  },
  {
    title: 'Laudos para Casos de Sinistros',
    overline: 'Danos e perdas financeiras',
    badge: 'Sinistros',
    image: 'assets/images/sinistro-galpao.jpg',
    text: 'Documento técnico e pericial para comprovar danos materiais em bens segurados e quantificar perdas financeiras decorrentes de eventos cobertos pela apólice.',
    benefits: ['Comprovação técnica de danos', 'Quantificação fundamentada de perdas', 'Registro fotográfico e análise pericial', 'Suporte para seguradoras, empresas e proprietários'],
    when: 'Após eventos como incêndios, vendavais, danos em edificações ou ocorrências que exijam comprovação técnica para fins securitários ou judiciais.'
  }
];

const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');

window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 40);
});

navToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    document.querySelectorAll('.main-nav a').forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-35% 0px -55% 0px' });
document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section));

const heroSlides = [...document.querySelectorAll('.hero-slide')];
let heroIndex = 0;
setInterval(() => {
  heroSlides[heroIndex].classList.remove('is-active');
  heroIndex = (heroIndex + 1) % heroSlides.length;
  heroSlides[heroIndex].classList.add('is-active');
}, 4800);

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const counter = entry.target;
    const target = Number(counter.dataset.count || 0);
    const duration = 950;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.floor(progress * target);
      counter.textContent = value;
      if (progress < 1) requestAnimationFrame(tick);
      else counter.textContent = target;
    };
    requestAnimationFrame(tick);
    counterObserver.unobserve(counter);
  });
}, { threshold: 0.4 });
document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

const tabs = [...document.querySelectorAll('.service-tab')];
const serviceImage = document.querySelector('[data-service-image]');
const serviceBadge = document.querySelector('[data-service-badge]');
const serviceTitle = document.querySelector('[data-service-title]');
const serviceOverline = document.querySelector('[data-service-overline]');
const serviceText = document.querySelector('[data-service-text]');
const serviceBenefits = document.querySelector('[data-service-benefits]');
const serviceWhen = document.querySelector('[data-service-when]');
const serviceWhatsapp = document.querySelector('[data-service-whatsapp]');

function updateService(index) {
  const item = services[index];
  tabs.forEach((tab, i) => {
    tab.classList.toggle('is-active', i === index);
    tab.setAttribute('aria-selected', String(i === index));
  });
  serviceImage.style.opacity = '0';
  setTimeout(() => {
    serviceImage.src = item.image;
    serviceImage.alt = item.title;
    serviceImage.style.opacity = '1';
  }, 160);
  serviceBadge.textContent = item.badge;
  serviceTitle.textContent = item.title;
  serviceOverline.textContent = item.overline;
  serviceText.textContent = item.text;
  serviceBenefits.innerHTML = item.benefits.map(benefit => `<li>${benefit}</li>`).join('');
  serviceWhen.textContent = item.when;
  const msg = `Olá, gostaria de solicitar um orçamento com a VALEA Engenharia. Serviço de interesse: ${item.title}.`;
  serviceWhatsapp.href = `https://wa.me/5545984332230?text=${encodeURIComponent(msg)}`;
}

tabs.forEach((tab) => tab.addEventListener('click', () => updateService(Number(tab.dataset.service))));
updateService(0);

const galleryTrack = document.querySelector('[data-gallery-track]');
const galleryViewport = document.querySelector('.gallery-viewport');
const galleryNext = document.querySelector('[data-gallery-next]');
const galleryPrev = document.querySelector('[data-gallery-prev]');
let galleryTimer;

if (galleryTrack && galleryViewport) {
  const originalGalleryCards = [...galleryTrack.querySelectorAll('.gallery-card')];
  const originalCount = originalGalleryCards.length;

  // Cria uma faixa triplicada: clones + originais + clones.
  // Isso evita o "vazio" no fim do carrossel e permite um loop infinito real.
  for (let i = originalGalleryCards.length - 1; i >= 0; i -= 1) {
    const clone = originalGalleryCards[i].cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    galleryTrack.insertBefore(clone, galleryTrack.firstChild);
  }
  originalGalleryCards.forEach(card => {
    const clone = card.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    galleryTrack.appendChild(clone);
  });

  let galleryCards = [...galleryTrack.querySelectorAll('.gallery-card')];
  let galleryIndex = originalCount;

  function galleryGap() {
    const styles = window.getComputedStyle(galleryTrack);
    return Number.parseFloat(styles.columnGap || styles.gap || '22') || 22;
  }

  function setGalleryPosition(animate = true) {
    galleryCards = [...galleryTrack.querySelectorAll('.gallery-card')];
    const activeCard = galleryCards[galleryIndex];
    if (!activeCard) return;

    const cardWidth = activeCard.getBoundingClientRect().width;
    const gap = galleryGap();
    const viewportWidth = galleryViewport.getBoundingClientRect().width;
    const offset = (viewportWidth - cardWidth) / 2 - galleryIndex * (cardWidth + gap);

    galleryTrack.classList.toggle('no-transition', !animate);
    galleryTrack.style.transform = `translate3d(${offset}px,0,0)`;

    galleryCards.forEach((card, i) => card.classList.toggle('is-active', i === galleryIndex));
    if (!animate) {
      // Força o navegador a aplicar o reposicionamento sem animação antes da próxima transição.
      galleryTrack.getBoundingClientRect();
      galleryTrack.classList.remove('no-transition');
    }
  }

  function moveGallery(direction = 1) {
    galleryIndex += direction;
    setGalleryPosition(true);
  }

  galleryTrack.addEventListener('transitionend', () => {
    if (galleryIndex >= originalCount * 2) {
      galleryIndex -= originalCount;
      setGalleryPosition(false);
    }
    if (galleryIndex < originalCount) {
      galleryIndex += originalCount;
      setGalleryPosition(false);
    }
  });

  galleryNext?.addEventListener('click', () => {
    moveGallery(1);
    restartGalleryTimer();
  });
  galleryPrev?.addEventListener('click', () => {
    moveGallery(-1);
    restartGalleryTimer();
  });

  function restartGalleryTimer() {
    window.clearInterval(galleryTimer);
    galleryTimer = window.setInterval(() => moveGallery(1), 5200);
  }

  window.addEventListener('resize', () => setGalleryPosition(false));
  setGalleryPosition(false);
  restartGalleryTimer();
}

const whatsappForm = document.querySelector('[data-whatsapp-form]');
whatsappForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(whatsappForm);
  const name = String(data.get('name') || '').trim();
  const service = String(data.get('service') || '').trim();
  const message = String(data.get('message') || '').trim();
  const text = [
    'Olá, gostaria de solicitar um orçamento com a VALEA Engenharia.',
    name ? `Meu nome é ${name}.` : '',
    service ? `Serviço de interesse: ${service}.` : '',
    message ? `Resumo da demanda: ${message}` : ''
  ].filter(Boolean).join('\n');
  window.open(`https://wa.me/5545984332230?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
});
