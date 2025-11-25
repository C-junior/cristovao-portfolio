"use client"

import { useState, useEffect } from "react"
import {
  Moon,
  Sun,
  Menu,
  ArrowRight,
  Star,
  Check,
  Mail,
  Phone,
  Instagram,
  Linkedin,
  Zap,
  Globe,
  Palette,
  Github,
  MessageCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Portfolio() {
  const [isDark, setIsDark] = useState(true) // Default to dark mode
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Websites Personalizados",
      description:
        "Sites sob medida para sua marca — institucionais, portfólios ou produtos digitais com foco em usabilidade e performance.",
      features: ["Design Responsivo", "Portfólios e Galerias", "Integrações Personalizadas", "SEO Básico"],
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Landing Pages",
      description: "Páginas de alta conversão para captar leads, apresentar produtos ou promover campanhas.",
      features: ["Otimização SEO", "Formulários Integrados", "Analytics", "Carregamento Rápido"],
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "E-commerce",
      description: "Lojas online escaláveis com pagamento seguro, gestão de produtos e experiência de compra otimizada.",
      features: ["Pagamento Seguro", "Gestão de Estoque", "Cupons de Desconto", "Relatórios de Vendas"],
    },
  ]

  const portfolio = [
    {
      title: "Site Pessoal - Naissa e Cristovão",
      category: "Portfólio Pessoal",
      image: "/naissaecristovao.png?height=300&width=400",
      description: "Website responsivo com galeria e seções personalizadas para apresentação pessoal.",
      tech: ["React", "Next.js", "Tailwind"],
    },
    {
      title: "Quartzo engenharia",
      category: "Corporativo",
      image: "/quartzo-eng.png?height=300&width=400",
      description: "Landing page para aquisição de lead e contato.",
      tech: ["HTML5", "CSS3", "JavaScript"],
    },
    {
      title: "Doces da Gabi",
      category: "Dashboard Financeiro",
      image: "/docegabi.png?height=300&width=400",
      description: "Site completo com venda e dashboard financeiro para controle de vendas e estoque.",
      tech: ["HTML5", "CSS3", "JavaScript"],
    },
    {
      title: "Agrotins 2025",
      category: "Hotsite Institucional",
      image: "/agrotins.png?height=300&width=400",
      description: "Hotsite institucional com seções informativas, galeria e chamadas para ação.",
      tech: ["Vue.js", "Nuxt", "Tailwind"],
    },
    {
      title: "Hydro Cultivo AI",
      category: "Tecnologia Agrícola",
      image: "/hydrocultivoai.png?height=300&width=400",
      description: "Plataforma de monitoramento e automação para hidroponia com inteligência artificial.",
      tech: ["React", "Node.js", "IoT"],
    },
    {
      title: "Code News",
      category: "Blog de Tecnologia",
      image: "/codenews.png?height=300&width=400",
      description: "Portal de notícias focado em desenvolvimento de software e novidades tech.",
      tech: ["Next.js", "CMS", "Tailwind"],
    },
  ]

  const testimonials = [
    {
      name: "Naissa",
      role: "Cliente",
      content:
        "Cristovão criou o site perfeito para nosso projeto. Design limpo, carregamento rápido e ótima usabilidade.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "João Santos",
      role: "Cliente",
      content: "Trabalho excepcional! O site melhorou significativamente nossos resultados online.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Ana Costa",
      role: "Empresária",
      content:
        "Profissional dedicado e criativo. Entregou exatamente o que precisávamos para nosso website institucional.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDark ? "dark" : ""}`}>
      <div className="bg-background text-foreground">
        {/* Header */}
        <header className="fixed top-0 w-full bg-background/90 backdrop-blur-xl border-b border-blue-500/20 z-50 transition-all duration-300">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link
              href="/"
              className={`text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent transition-all duration-300 hover:scale-105 ${isVisible ? "animate-fade-in" : "opacity-0"
                }`}
            >
              Cristovão Jr.
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {["Início", "Serviços", "Portfólio", "Sobre", "Contato"].map((item, index) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace("í", "i").replace("ó", "o")}`}
                  className={`hover:text-blue-400 transition-all duration-300 hover:scale-105 relative group ${isVisible ? "animate-slide-down" : "opacity-0"
                    }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
              >
                {isDark ? <Sun className="h-5 w-5 text-blue-400" /> : <Moon className="h-5 w-5 text-blue-600" />}
              </Button>

              {/* Mobile Menu */}
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden hover:bg-blue-500/10 transition-all duration-300"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="bg-background/95 backdrop-blur-xl">
                  <nav className="flex flex-col space-y-6 mt-8">
                    {["Início", "Serviços", "Portfólio", "Sobre", "Contato"].map((item, index) => (
                      <Link
                        key={item}
                        href={`#${item.toLowerCase().replace("í", "i").replace("ó", "o")}`}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-lg hover:text-blue-400 transition-all duration-300 hover:translate-x-2"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {item}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section
          id="inicio"
          className="pt-20 pb-16 bg-gradient-to-br from-blue-950/50 via-background to-blue-900/30 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="container mx-auto px-4 py-16 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`space-y-6 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
                <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20 hover:bg-blue-500/20 transition-all duration-300">
                  Websites Profissionais
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                  Transformo sua presença online em
                  <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent animate-gradient">
                    resultados reais
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Desenvolvo websites personalizados para empresas e profissionais, com foco em usabilidade, marca e
                  conversão.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    Ver Meu Trabalho
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-500/30 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 hover:scale-105 bg-transparent"
                  >
                    Solicitar Orçamento
                  </Button>
                </div>
                <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-muted-foreground">
                  {[
                    { icon: <Check className="h-4 w-4 text-blue-400" />, text: "Entrega em 7 dias" },
                    { icon: <Check className="h-4 w-4 text-blue-400" />, text: "Suporte incluso" },
                    { icon: <Check className="h-4 w-4 text-blue-400" />, text: "Design responsivo" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-2 hover:text-blue-400 transition-all duration-300 ${isVisible ? "animate-fade-in" : "opacity-0"
                        }`}
                      style={{ animationDelay: `${800 + index * 200}ms` }}
                    >
                      {item.icon}
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`relative ${isVisible ? "animate-slide-left" : "opacity-0"}`}>
                <div className="relative z-10 group">
                  <Image
                    src="/logo.png"
                    alt="Cristovão Junior - Web Designer"
                    width={600}
                    height={500}
                    className="rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-blue-500/25 relative z-10"
                    style={{ filter: "drop-shadow(0 0 30px rgba(59, 130, 246, 0.3))" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-20"></div>
                </div>
                <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-500/30 to-blue-700/30 rounded-2xl -z-10 animate-pulse-slow"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">Serviços</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Soluções digitais completas para sua marca</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ofereço soluções de design e desenvolvimento web que alinham estética e desempenho para gerar valor
                real ao seu negócio.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 border-blue-500/20 bg-gradient-to-br from-background to-blue-950/20 group hover:scale-105 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-0">
                    <div className="text-blue-400 mb-4 group-hover:scale-110 transition-all duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm hover:text-blue-400 transition-all duration-300"
                        >
                          <Check className="h-4 w-4 text-blue-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-16 bg-blue-950/10 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">Portfólio</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Projetos que fazem a diferença</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Conheça alguns dos projetos que desenvolvi e veja como posso ajudar a elevar sua presença digital.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {portfolio.map((project, index) => (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 group border-blue-500/20 hover:scale-105"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-blue-500/60 text-white border-blue-400/90">
                        {project.category}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      {project.tech.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="text-xs bg-background/80 backdrop-blur-sm border-blue-500/30 text-blue-400"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500/30 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 hover:scale-105 bg-transparent"
              >
                Ver Todos os Projetos
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <Image
                  src="/me.png?height=400&width=500"
                  alt="Sobre Cristovão Junior"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-blue-500/25"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
              <div>
                <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">Sobre Mim</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Paixão por criar experiências digitais memoráveis
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Sou Cristovão Junior, web designer com mais de 5 anos de experiência em criar websites que combinam
                  design e estratégia. Já ajudei empresas e profissionais a aumentarem sua autoridade e resultados
                  online.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Minha missão é combinar design moderno com funcionalidade prática, criando websites que não apenas
                  impressionam visualmente, mas também convertem visitantes em participantes engajados.
                </p>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    { number: "50+", label: "Projetos Concluídos" },
                    { number: "100%", label: "Clientes Satisfeitos" },
                    { number: "5+", label: "Anos de Experiência" },
                    { number: "24h", label: "Suporte Rápido" },
                  ].map((stat, index) => (
                    <div
                      key={index}
                      className="text-center p-4 rounded-lg bg-blue-950/20 hover:bg-blue-950/30 transition-all duration-300 hover:scale-105"
                    >
                      <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  Vamos Conversar
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-blue-950/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">Depoimentos</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">O que meus clientes dizem</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A satisfação dos meus clientes é minha maior recompensa. Veja alguns depoimentos reais.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 border-blue-500/20 hover:scale-105 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="p-0">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-blue-400 text-blue-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                    <div className="flex items-center gap-3">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">Contato</Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Pronto para começar seu projeto?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Entre em contato comigo e vamos criar juntos o website perfeito para sua marca ou negócio.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Vamos conversar</h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: <Mail className="h-6 w-6 text-blue-400" />,
                      title: "Email",
                      info: "ti.juniorc@gmail.com",
                      href: "mailto:ti.juniorc@gmail.com"
                    },
                    {
                      icon: <Phone className="h-6 w-6 text-blue-400" />,
                      title: "WhatsApp",
                      info: "(63) 98108-9718",
                      href: "https://wa.me/5563981089718"
                    },
                    {
                      icon: <Instagram className="h-6 w-6 text-blue-400" />,
                      title: "Instagram",
                      info: "Em breve",
                      href: "#",
                    },
                  ].map((contact, index) => (
                    <Link
                      key={index}
                      href={contact.href}
                      target={contact.href.startsWith("http") ? "_blank" : undefined}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-blue-950/20 transition-all duration-300 hover:scale-105 cursor-pointer block"
                    >
                      <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        {contact.icon}
                      </div>
                      <div>
                        <div className="font-semibold">{contact.title}</div>
                        <div className="text-muted-foreground hover:text-blue-400 transition-colors duration-300">
                          {contact.info}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <Card className="p-6 border-blue-500/20 bg-gradient-to-br from-background to-blue-950/20">
                <CardContent className="p-0">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        placeholder="Seu nome"
                        className="border-blue-500/30 focus:border-blue-400 transition-all duration-300"
                      />
                      <Input
                        placeholder="Seu email"
                        type="email"
                        className="border-blue-500/30 focus:border-blue-400 transition-all duration-300"
                      />
                    </div>
                    <Input
                      placeholder="Tipo de projeto (ex: site institucional, loja, landing page)"
                      className="border-blue-500/30 focus:border-blue-400 transition-all duration-300"
                    />
                    <Textarea
                      placeholder="Conte-me mais sobre seu projeto..."
                      rows={4}
                      className="border-blue-500/30 focus:border-blue-400 transition-all duration-300"
                    />
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25" asChild>
                      <Link href="https://wa.me/5563981089718?text=Olá,%20gostaria%20de%20um%20orçamento." target="_blank">
                        Enviar Mensagem
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-blue-950/20 border-t border-blue-500/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4 md:mb-0">
                Cristovão Jr.
              </div>
              <div className="flex items-center space-x-6">
                {[
                  { icon: <Instagram className="h-5 w-5" />, href: "#" },
                  { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/juniorcristovao" },
                  { icon: <Github className="h-5 w-5" />, href: "https://github.com/C-junior" },
                  { icon: <Mail className="h-5 w-5" />, href: "mailto:ti.juniorc@gmail.com" },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="text-muted-foreground hover:text-blue-400 transition-all duration-300 hover:scale-110"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-blue-500/20 text-center text-muted-foreground">
              <p>&copy; 2025 Cristovão Junior. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
