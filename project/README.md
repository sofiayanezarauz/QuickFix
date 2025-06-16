# QuickFix Marketplace

Una aplicación móvil completa para el marketplace de servicios de mantenimiento y reparación en Buenos Aires, Argentina.

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn
- Expo CLI instalado globalmente: `npm install -g @expo/cli`
- Expo Go app instalada en tu dispositivo móvil

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd quickfix-marketplace
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   - Copia el archivo `.env` y configura las variables necesarias
   - Obtén las claves de API requeridas (MercadoPago, Google Maps, etc.)

4. **Iniciar el servidor de desarrollo**
   ```bash
   npm start
   ```

5. **Conectar tu dispositivo**
   - Abre Expo Go en tu dispositivo móvil
   - Escanea el código QR que aparece en la terminal o navegador
   - Asegúrate de estar en la misma red WiFi

### Scripts Disponibles

- `npm start` - Inicia el servidor de desarrollo con Metro bundler
- `npm run android` - Abre en emulador Android
- `npm run ios` - Abre en simulador iOS
- `npm run web` - Abre en navegador web
- `npm run build:web` - Construye para producción web

### Estructura del Proyecto

```
quickfix-marketplace/
├── app/                    # Rutas de la aplicación (Expo Router)
│   ├── (tabs)/            # Navegación por pestañas
│   │   ├── home/          # Sección para hogares
│   │   ├── business/      # Sección para PyMEs
│   │   └── professional/  # Sección para profesionales
│   ├── _layout.tsx        # Layout raíz
│   └── index.tsx          # Pantalla de onboarding
├── components/            # Componentes reutilizables
│   ├── ui/               # Componentes de interfaz
│   ├── home/             # Componentes específicos del hogar
│   └── onboarding/       # Componentes de onboarding
├── constants/            # Constantes y configuraciones
├── types/               # Definiciones de TypeScript
└── hooks/               # Hooks personalizados
```

### Características Principales

- **Multi-segmento**: Hogares, PyMEs y Profesionales
- **Geolocalización**: Búsqueda basada en ubicación
- **Sistema de suscripciones**: Free, Básico ($4), Avanzado ($8)
- **Chat en tiempo real**: Comunicación segura
- **Pagos integrados**: MercadoPago
- **Verificación de profesionales**: Sistema de confianza
- **Tutoriales pagos**: Marketplace de contenido educativo

### Tecnologías Utilizadas

- **React Native** con Expo SDK 52
- **Expo Router** para navegación
- **TypeScript** para tipado estático
- **Lucide React Native** para iconografía
- **React Native Reanimated** para animaciones
- **Expo Location** para geolocalización
- **Expo Secure Store** para almacenamiento seguro

### Configuración de Red Local

Para que Expo Go pueda conectarse correctamente:

1. Asegúrate de que tu computadora y dispositivo móvil estén en la misma red WiFi
2. Si tienes problemas de conexión, usa el modo túnel: `npm start --tunnel`
3. Para desarrollo local, el servidor Metro estará disponible en: `http://[tu-ip]:8081`

### Hot Reloading

El Hot Reloading está habilitado por defecto. Los cambios en el código se reflejarán automáticamente en tu dispositivo.

### Solución de Problemas

- **Error de conexión**: Verifica que estés en la misma red WiFi
- **Fuentes no cargan**: Asegúrate de que las fuentes de Google estén correctamente instaladas
- **Problemas de caché**: Ejecuta `npm start --clear` para limpiar la caché

### Próximos Pasos

1. Configurar las claves de API en el archivo `.env`
2. Implementar la autenticación de usuarios
3. Integrar con backend de producción
4. Configurar notificaciones push
5. Implementar pagos con MercadoPago

Para más información, consulta la documentación de [Expo](https://docs.expo.dev/) y [Expo Router](https://expo.github.io/router/).