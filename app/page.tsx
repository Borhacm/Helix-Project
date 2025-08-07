"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Home,
  Users,
  Award,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Menu,
  X,
  ArrowRight,
  Star,
  Globe,
  Target,
  Zap,
} from "lucide-react"
import { Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function HelixProjectWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState("todos")

  const projects = [
    {
      id: 1,
      title: "Edificio Comercial Madrid",
      type: "consultoria",
      location: "Madrid, España",
      image: "/imagenes/20240709_123113.jpg",
      description: "Apoyo en la gestión y consultoría técnica en la construcción de moderno edificio comercial y de oficinas",
    },
    {
      id: 2,
      title: "Hotel Boutique Tulum",
      type: "hotelero",
      location: "Tulum, México",
      image: "/imagenes/hotel_tulum_nuevo.jpg",
      description: "Desarrollo hotelero sustentable",
    },
    {
      id: 3,
      title: "Residencial de lujo en Madrid",
      type: "residencial",
      location: "Madrid, España",
      image: "/imagenes/residencial_madrid.jpg",
      description: "Casa familiar con los mejores materiales y acabados en urbanización de lujo",
    },
    {
      id: 4,
      title: "Resort Riviera Maya",
      type: "hotelero",
      location: "Riviera Maya, México",
      image: "/imagenes/resort_riviera_maya_nuevo.jpg",
      description: "Complejo hotelero de gran escala",
    },
    {
      id: 5,
      title: "Hospital Gregorio Marañón",
      type: "consultoria_tecnica",
      location: "Madrid, España",
      image: "/imagenes/hospital_gregorio_maranon.jpg",
      description: "Consultoría para asegurar la calidad técnica de importante hospital español",
    },
    {
      id: 6,
      title: "Centro Oncológico",
      type: "consultoria_tecnica",
      location: "Madrid, España",
      image: "/imagenes/centro_oncologico.jpg",
      description: "Consultoría para asegurar la calidad técnica de importante centro oncológico español",
    },
    {
      id: 7,
      title: "Centro Logístico Inditex",
      type: "consultoria_tecnica",
      location: "Rotterdam, Holanda",
      image: "/imagenes/centro_logistico_inditex.jpg",
      description: "Consultoría técnica del primer centro logístico de Inditex en Holanda",
    },
  ]

  const filteredProjects =
    selectedFilter === "todos" ? projects : projects.filter((project) => project.type === selectedFilter)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/logo.svg" 
                alt="Helix Project Logo" 
                width={120} 
                height={40}
                className="object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#inicio" className="text-[#737b78] hover:text-[#061d1a] transition-colors">
                Inicio
              </Link>
              <Link href="#nosotros" className="text-[#737b78] hover:text-[#061d1a] transition-colors">
                Nosotros
              </Link>
              <Link href="#servicios" className="text-[#737b78] hover:text-[#061d1a] transition-colors">
                Servicios
              </Link>
              <Link href="#proyectos" className="text-[#737b78] hover:text-[#061d1a] transition-colors">
                Proyectos
              </Link>
              <Link href="#contacto" className="text-[#737b78] hover:text-[#061d1a] transition-colors">
                Contacto
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <Link href="#inicio" className="text-[#737b78] hover:text-[#061d1a] transition-colors">
                  Inicio
                </Link>
                <Link href="#nosotros" className="text-[#737b78] hover:text-[#061d1a] transition-colors">
                  Nosotros
                </Link>
                <Link href="#servicios" className="text-[#737b78] hover:text-[#061d1a] transition-colors">
                  Servicios
                </Link>
                <Link href="#proyectos" className="text-[#737b78] hover:text-[#061d1a] transition-colors">
                  Proyectos
                </Link>
                <Link href="#contacto" className="text-[#737b78] hover:text-[#061d1a] transition-colors">
                  Contacto
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 text-white"
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <Image
          src="/imagenes/hero_construccion.jpg"
          alt="Proyecto de construcción Helix"
          fill
          className="object-cover mix-blend-soft-light"
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            CONSTRUIMOS CON
            <br />
            <span className="text-[#c3dbb9]">PROPÓSITO</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed font-semibold">
            Nuestro compromiso profesional asegura resultados.
            <br />
            <span className="text-[#c3dbb9]">Nuestra experiencia nos avala.</span>
          </p>
          
          <div className="max-w-5xl mx-auto mb-10">
            <div className="text-lg md:text-xl leading-relaxed text-white/90 space-y-6 text-center">
              <p>
                Nos especializamos en la gestión integral de proyectos exclusivos de construcción en la Riviera Maya. 
                <span className="text-[#c3dbb9] font-medium"> Te acompañamos durante todo el proceso, sea cual sea el reto.</span>
              </p>
              <p>
                Conformado por un equipo mixto con <span className="text-[#c3dbb9] font-medium">experiencia europea y mexicana</span> en proyectos del más alto nivel.
              </p>
              <p>
                Ejecutamos cada proyecto con precisión y un <span className="text-[#c3dbb9] font-medium">enfoque centrado en tus objetivos.</span>
              </p>
            </div>
          </div>

          <Link href="#servicios">
            <Button size="lg" className="bg-[#061d1a] hover:bg-[#061d1a]/90 text-white px-8 py-4 text-lg rounded-full">
              Conoce nuestros servicios
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Nosotros Section */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
            <div className="lg:pr-8">
              <h2 className="text-4xl md:text-5xl font-bold text-[#061d1a] mb-6">
                Experiencia Internacional,
                <br />
                <span className="text-[#7dc1ae]">Expertise Local</span>
              </h2>
              <p className="text-lg text-[#737b78] mb-8 leading-relaxed">
                Con una sólida trayectoria en Europa (España y Países Bajos), Helix Project se ha consolidado como
                referente en gestión de construcción en Cancún. Aplicamos metodologías europeas rigurosas adaptadas al
                mercado local de la Riviera Maya.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#061d1a] mb-2">15+</div>
                  <div className="text-sm text-[#737b78]">Años de Experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#061d1a] mb-2">50+</div>
                  <div className="text-sm text-[#737b78]">Proyectos Completados</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#061d1a] mb-2">3</div>
                  <div className="text-sm text-[#737b78]">Países de Operación</div>
                </div>
              </div>
            </div>

            <div className="relative lg:pl-8">
              <Image
                src="/imagenes/equipo_construccion.webp"
                alt="Equipo Helix Project en obra"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-20 bg-[#e5e5e5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#061d1a] mb-6">Nuestros Servicios</h2>
            <p className="text-lg text-[#737b78] max-w-2xl mx-auto">
              Ofrecemos soluciones integrales adaptadas a las necesidades específicas de cada cliente y tipo de
              proyecto.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Para Particulares */}
            <Card className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#c3dbb9] rounded-lg flex items-center justify-center mr-4">
                    <Home className="w-6 h-6 text-[#061d1a]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#061d1a]">Viviendas de Alto Estándar</h3>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-[#061d1a] mb-4">Nuestros 3 Pilares:</h4>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <Target className="w-8 h-8 text-[#7dc1ae] mx-auto mb-2" />
                      <span className="text-sm font-medium text-[#737b78]">Funcionalidad</span>
                    </div>
                    <div className="text-center">
                      <Zap className="w-8 h-8 text-[#7dc1ae] mx-auto mb-2" />
                      <span className="text-sm font-medium text-[#737b78]">Viabilidad Económica</span>
                    </div>
                    <div className="text-center">
                      <Star className="w-8 h-8 text-[#7dc1ae] mx-auto mb-2" />
                      <span className="text-sm font-medium text-[#737b78]">Estética</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#7dc1ae] mr-3" />
                    <span className="text-[#737b78]">Asesoría técnica especializada</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#7dc1ae] mr-3" />
                    <span className="text-[#737b78]">Gestión integral del proyecto</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#7dc1ae] mr-3" />
                    <span className="text-[#737b78]">Entrega llave en mano</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#7dc1ae] mr-3" />
                    <span className="text-[#737b78]">Supervisión de calidad</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Para Empresas */}
            <Card className="p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#c3dbb9] rounded-lg flex items-center justify-center mr-4">
                    <Building2 className="w-6 h-6 text-[#061d1a]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#061d1a]">Proyectos Hoteleros</h3>
                </div>

                <p className="text-[#737b78] mb-6">
                  Metodologías rigurosas y cumplimiento de estándares internacionales para desarrollos hoteleros de gran
                  escala.
                </p>

                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#7dc1ae] mr-3" />
                    <span className="text-[#737b78]">Gerencia de obra especializada</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#7dc1ae] mr-3" />
                    <span className="text-[#737b78]">Supervisión técnica continua</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#7dc1ae] mr-3" />
                    <span className="text-[#737b78]">Coordinación multidisciplinaria</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#7dc1ae] mr-3" />
                    <span className="text-[#737b78]">Consultoría estratégica</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-[#7dc1ae] mr-3" />
                    <span className="text-[#737b78]">Control de costos y tiempos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Proyectos Section */}
      <section id="proyectos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#061d1a] mb-6">Nuestros Proyectos</h2>
            <p className="text-lg text-[#737b78] max-w-2xl mx-auto mb-8">
              Cada proyecto refleja nuestro compromiso con la excelencia y la innovación en la gestión de construcción.
            </p>

            {/* Filtros */}
            <div className="flex justify-center space-x-4 mb-12">
              <Button
                variant={selectedFilter === "todos" ? "default" : "outline"}
                onClick={() => setSelectedFilter("todos")}
                className={
                  selectedFilter === "todos"
                    ? "bg-[#061d1a] hover:bg-[#061d1a]/90"
                    : "border-[#061d1a] text-[#061d1a] hover:bg-[#061d1a] hover:text-white"
                }
              >
                Todos
              </Button>
              <Button
                variant={selectedFilter === "residencial" ? "default" : "outline"}
                onClick={() => setSelectedFilter("residencial")}
                className={
                  selectedFilter === "residencial"
                    ? "bg-[#061d1a] hover:bg-[#061d1a]/90"
                    : "border-[#061d1a] text-[#061d1a] hover:bg-[#061d1a] hover:text-white"
                }
              >
                Residencial
              </Button>
              <Button
                variant={selectedFilter === "consultoria" ? "default" : "outline"}
                onClick={() => setSelectedFilter("consultoria")}
                className={
                  selectedFilter === "consultoria"
                    ? "bg-[#061d1a] hover:bg-[#061d1a]/90"
                    : "border-[#061d1a] text-[#061d1a] hover:bg-[#061d1a] hover:text-white"
                }
              >
                Gerencia de Obra
              </Button>
              <Button
                variant={selectedFilter === "hotelero" ? "default" : "outline"}
                onClick={() => setSelectedFilter("hotelero")}
                className={
                  selectedFilter === "hotelero"
                    ? "bg-[#061d1a] hover:bg-[#061d1a]/90"
                    : "border-[#061d1a] text-[#061d1a] hover:bg-[#061d1a] hover:text-white"
                }
              >
                Hotelero
              </Button>
              <Button
                variant={selectedFilter === "consultoria_tecnica" ? "default" : "outline"}
                onClick={() => setSelectedFilter("consultoria_tecnica")}
                className={
                  selectedFilter === "consultoria_tecnica"
                    ? "bg-[#061d1a] hover:bg-[#061d1a]/90"
                    : "border-[#061d1a] text-[#061d1a] hover:bg-[#061d1a] hover:text-white"
                }
              >
                Consultoría Técnica
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge
                    className={`absolute top-4 left-4 ${
                      project.type === "consultoria" 
                        ? "bg-[#c3dbb9] text-[#061d1a]" 
                        : project.type === "hotelero" 
                        ? "bg-[#7dc1ae] text-white" 
                        : project.type === "consultoria_tecnica"
                        ? "bg-[#9ca3af] text-white"
                        : "bg-[#a8b5b0] text-white"
                    }`}
                  >
                    {project.type === "consultoria" 
                      ? "Gerencia de Obra" 
                      : project.type === "hotelero" 
                      ? "Hotelero" 
                      : project.type === "consultoria_tecnica"
                      ? "Consultoría Técnica"
                      : "Residencial"}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#061d1a] mb-2">{project.title}</h3>
                  <p className="text-[#737b78] mb-3">{project.description}</p>
                  <div className="flex items-center text-sm text-[#737b78]">
                    <MapPin className="w-4 h-4 mr-1" />
                    {project.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ventajas Competitivas */}
      <section className="py-20 bg-[#061d1a] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Por qué elegir <span className="text-[#c3dbb9]">Helix Project</span>?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Nuestras ventajas competitivas nos posicionan como líderes en gestión de construcción en la Riviera Maya.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#7dc1ae] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Red de Contactos Locales</h3>
              <p className="text-gray-300">Amplia red de proveedores y especialistas locales de confianza.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#7dc1ae] rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Experiencia Internacional</h3>
              <p className="text-gray-300">Metodologías probadas en mercados europeos de alta exigencia.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#7dc1ae] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Metodologías Europeas</h3>
              <p className="text-gray-300">Estándares de calidad y procesos rigurosos adaptados localmente.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#7dc1ae] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Conocimiento Local</h3>
              <p className="text-gray-300">Profundo entendimiento del mercado Cancún/Riviera Maya.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#061d1a] mb-6">
              Hablemos de tu
              <br />
              <span className="text-[#7dc1ae]">próximo proyecto</span>
            </h2>
            <p className="text-lg text-[#737b78] mb-12 max-w-2xl mx-auto">
              Solicita tu consulta gratuita y descubre cómo podemos hacer realidad tu proyecto con los más altos
              estándares de calidad.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#c3dbb9] rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-[#061d1a]" />
                </div>
                <h4 className="font-semibold text-[#061d1a] mb-2">Ubicación</h4>
                <p className="text-[#737b78]">Cancún, Quintana Roo, México</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#c3dbb9] rounded-xl flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-[#061d1a]" />
                </div>
                <h4 className="font-semibold text-[#061d1a] mb-2">Teléfono</h4>
                <p className="text-[#737b78]">+52 998 398 5350</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#c3dbb9] rounded-xl flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-[#061d1a]" />
                </div>
                <h4 className="font-semibold text-[#061d1a] mb-2">Email</h4>
                <p className="text-[#737b78]">jorgefzmz@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#061d1a] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="bg-[#7dc1ae]/10 backdrop-blur-sm rounded-xl p-4 mb-6 border border-[#7dc1ae]/20">
                <Image 
                  src="/logo.svg" 
                  alt="Helix Project Logo" 
                  width={120} 
                  height={39} 
                  className="object-contain filter brightness-0 invert"
                />
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Gestión técnica de construcción de alto nivel con experiencia internacional y expertise local en la
                Riviera Maya.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Viviendas Residenciales</li>
                <li>Proyectos Hoteleros</li>
                <li>Gerencia de Obra</li>
                <li>Consultoría Técnica</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-gray-300">
                <p>Cancún, Quintana Roo</p>
                <p>+52 998 398 5350</p>
                <p>jorgefzmz@gmail.com</p>
                <a href="https://www.linkedin.com/in/jorge-fern%C3%A1ndez-1990/" target="_blank" rel="noopener noreferrer" title="Arquitecto" className="flex items-center gap-2 mt-2 text-[#0A66C2] hover:text-[#004182] transition-colors">
                  <Linkedin className="w-6 h-6" />
                  <span className="text-white">Arquitecto</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Helix Project. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
