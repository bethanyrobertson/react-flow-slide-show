"use client"

import {
  PromptInput,
  PromptInputActions,
  PromptInputTextarea,
} from "@/components/ui/prompt-input"
import { PromptSuggestion } from "@/components/ui/prompt-suggestion"
import { Button } from "@/components/ui/button"
import { ArrowUpIcon } from "lucide-react"
import { useState } from "react"
import {
  CodeBlock,
  CodeBlockCopyButton,
} from "@/components/ai-elements/code-block"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { PixelTrail } from "@/components/ui/pixel-trail"
import useScreenSize from "@/hooks/use-screen-size"
import { MeshGradient } from "@paper-design/shaders-react"

// Custom Dracula theme for syntax highlighting
const draculaTheme = {
  'pre[class*="language-"]': {
    background: '#282a36',
    color: '#f8f8f2',
  },
  'code[class*="language-"]': {
    background: '#282a36',
    color: '#f8f8f2',
  },
  '.token.keyword': {
    color: '#ff79c6',
  },
  '.token.string': {
    color: '#f1fa8c',
  },
  '.token.number': {
    color: '#bd93f9',
  },
  '.token.boolean': {
    color: '#bd93f9',
  },
  '.token.function': {
    color: '#50fa7b',
  },
  '.token.comment': {
    color: '#6272a4',
  },
  '.token.punctuation': {
    color: '#f8f8f2',
  },
  '.token.operator': {
    color: '#ff79c6',
  },
  '.token.class-name': {
    color: '#8be9fd',
  },
  '.token.tag': {
    color: '#ff5555',
  },
  '.token.attr-name': {
    color: '#50fa7b',
  },
  '.token.attr-value': {
    color: '#f1fa8c',
  },
  '.token.property': {
    color: '#8be9fd',
  },
  '.token.selector': {
    color: '#ff79c6',
  },
  '.token.constant': {
    color: '#bd93f9',
  },
  '.token.variable': {
    color: '#f8f8f2',
  },
  '.token.important': {
    color: '#ff5555',
  },
  '.token.builtin': {
    color: '#8be9fd',
  },
  '.token.regex': {
    color: '#f1fa8c',
  },
  '.token.attr-value .token.punctuation': {
    color: '#f1fa8c',
  },
  '.token.attr-value .token.punctuation.attr-equals': {
    color: '#f8f8f2',
  },
}

// Background component generators
const MinimalistBackground = () => {
  const screenSize = useScreenSize()
  return (
    <div className="absolute inset-0 z-0">
      <PixelTrail
        pixelSize={screenSize.lessThan(`md`) ? 48 : 80}
        fadeDuration={0}
        delay={1200}
        pixelClassName="rounded-full bg-white"
      />
    </div>
  )
}

const Liquid = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
      <MeshGradient
        width={1920}
        height={1080}
        colors={["#72b9bb", "#b5d9d9", "#ffd1bd", "#ffebe0", "#8cc5b8", "#dbf4a4"]}
        distortion={1.2}
        swirl={0.6}
        grainMixer={0}
        grainOverlay={0}
        speed={0.8}
        offsetX={0.08}
      />
      <div className="absolute inset-0 pointer-events-none bg-white/20" />
    </div>
  )
}



type Theme = {
  name: string
  background: string
  backgroundStyle?: React.CSSProperties
  cardBg: string
  text: string
  accent: string
  border: string
  font: string
  borderRadius: string
  buttonRadius: string
  shadow: string
  buttonBg: string
  buttonBorder: string
  buttonText: string
  buttonBorderWidth: string
  buttonHoverShadow: string
  buttonHover: string
  buttonHoverText: string
  sendButtonBg: string
  sendButtonRadius: string
  sendButtonIconColor: string
  inputBg: string
  inputText: string
  codeExample: string
  codeBlockClassName: string
  codeBlockTheme: 'dark' | 'light'
  backgroundComponent?: React.ReactNode
  cardBackgroundComponent?: React.ReactNode
  useAuroraWrapper?: boolean
}

const themes: Record<string, Theme> = {
  default: {
    name: "Default",
    background: "bg-[#13343B]",
    cardBg: "bg-[#0d2529]",
    text: "text-[#30b8c6]",
    accent: "bg-[#30b8c6]",
    border: "border-none",
    font: "font-mono",
    borderRadius: "rounded-2xl",
    buttonRadius: "rounded-lg",
    shadow: "shadow-none",
    buttonBg: "bg-[#2E565E]",
    buttonBorder: "",
    buttonText: "text-[#30b8c6]",
    buttonBorderWidth: "border-none",
    buttonHoverShadow: "",
    buttonHover: "hover:bg-[#30b8c6]",
    buttonHoverText: "hover:text-[#0d2529]",
    sendButtonBg: "bg-[#30b8c6]",
    sendButtonRadius: "rounded-full",
    sendButtonIconColor: "text-black",
    inputBg: "bg-[#1a4049]",
    inputText: "text-[#30b8c6]",
    codeExample: `function DefaultTheme() {
  return (
    <div className="bg-dark rounded-xl p-4">
      <h2>Clean & Modern</h2>
      <p>Minimalist design with subtle accents</p>
    </div>
  );
}`,
    codeBlockClassName: "rounded-xl",
    codeBlockTheme: 'dark'
  },
  brutalist: {
    name: "Brutalist",
    background: "bg-[#b37dff]",
    cardBg: "bg-[#B3ECDE]",
    text: "text-black",
    accent: "bg-[#b37dff]",
    border: "border-black",
    font: "font-sans font-bold",
    borderRadius: "rounded-none",
    buttonRadius: "rounded-none",
    shadow: "shadow-[4px_4px_0px_rgba(0,0,0,1)]",
    buttonBg: "bg-[#B3ECDE]",
    buttonBorder: "border-black",
    buttonText: "text-black font-bold",
    buttonBorderWidth: "border-2",
    buttonHoverShadow: "hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]",
    buttonHover: "hover:bg-white",
    buttonHoverText: "hover:text-black",
    sendButtonBg: "bg-black",
    sendButtonRadius: "rounded-none",
    sendButtonIconColor: "text-white",
    inputBg: "bg-white",
    inputText: "text-black",
    codeExample: `<div className="border-4 border-black">
  <h1 className="font-bold text-4xl">BRUTALIST</h1>
  <button className="border-4 border-black bg-white 
    hover:shadow-[4px_4px_0px_black]">
    CLICK ME
  </button>
</div>`,
    codeBlockClassName: "rounded-none border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] [&_pre]:!bg-white [&_code]:!text-black",
    codeBlockTheme: 'light'
  },
  miami: {
    name: "Miami Vaporwave",
    background: "",
    backgroundStyle: {
      backgroundImage: `
        linear-gradient(180deg, #ffffff 0%, #FFEDD5 25%, #FFDAB9 50%, #FFB6C1 70%, #E0BBE4 85%, #F3E5F5 100%),
        radial-gradient(at 20% 30%, #ffffff33 0%, transparent 60%),
        radial-gradient(at 80% 70%, #f3e5f533 0%, transparent 70%)
      `,
      backgroundBlendMode: "overlay, screen",
      backdropFilter: "blur(40px)",
      WebkitBackdropFilter: "blur(40px)",
    },
    cardBg: "bg-white/30",
    text: "text-purple-900",
    accent: "",
    border: "",
    font: "font-sans",
    borderRadius: "rounded-2xl",
    buttonRadius: "rounded-full",
    shadow: "shadow-none",
    buttonBg: "bg-pink-300",
    buttonBorder: "border-none",
    buttonText: "text-purple-900",
    buttonBorderWidth: "border-none",
    buttonHoverShadow: "",
    buttonHover: "hover:bg-gradient-to-r from-orange-400 to-pink-500",
    buttonHoverText: "",
    sendButtonBg: "bg-gradient-to-r from-orange-400 to-pink-500",
    sendButtonRadius: "rounded-full",
    sendButtonIconColor: "text-white",
    inputBg: "bg-white/50",
    inputText: "text-purple-900",
    codeExample: `<div className="bg-gradient-to-r from-orange-400 to-pink-500 
  rounded-2xl shadow-2xl p-6">
  <h2 className="text-white font-sans">Miami Vibes</h2>
  <button className="rounded-full bg-pink-500 
    text-white px-6 py-2">
    Explore
  </button>
</div>`,
    codeBlockClassName: "rounded-2xl shadow-none [&_pre]:!bg-white [&_code]:!text-purple-900",
    codeBlockTheme: 'light'
  },
  forest: {
    name: "Forest",
    background: "bg-gradient-to-br from-green-50 to-emerald-100",
    cardBg: "bg-white/85 backdrop-blur",
    text: "text-green-900",
    accent: "bg-emerald-600",
    border: "border-green-300",
    font: "font-mono",
    borderRadius: "rounded-lg",
    buttonRadius: "rounded-md",
    shadow: "shadow-none",
    buttonBg: "bg-green-600",
    buttonBorder: "border-green-700",
    buttonText: "text-green-50",
    buttonBorderWidth: "border-2",
    buttonHoverShadow: "",
    buttonHover: "hover:bg-emerald-700 hover:brightness-110",
    buttonHoverText: "",
    sendButtonBg: "bg-emerald-600",
    sendButtonRadius: "rounded-md",
    sendButtonIconColor: "text-white",
    inputBg: "bg-white",
    inputText: "text-green-900",
    codeExample: `const ForestTheme = () => {
  return (
    <div className="font-mono rounded-lg 
      bg-emerald-50 border-2 border-green-300">
      <code>Nature-inspired design</code>
      <button>Click</button>
    </div>
  );
};`,
    codeBlockClassName: "rounded-lg border-2 border-green-400 shadow-md [&_pre]:!bg-emerald-50 [&_code]:!text-green-900",
    codeBlockTheme: 'light'
  },
  minimalist: {
    name: "Minimalist",
    background: "bg-[#d6d8d7]",
    cardBg: "bg-white",
    text: "text-black",
    accent: "bg-[#fe7d0d]",
    border: "",
    font: "font-mono",
    borderRadius: "rounded-2xl",
    buttonRadius: "rounded-full",
    shadow: "",
    buttonBg: "bg-black",
    buttonBorder: "border-none",
    buttonText: "text-white",
    buttonBorderWidth: "border",
    buttonHoverShadow: "",
    buttonHover: "hover:bg-[#fe7d0d]",
    buttonHoverText: "",
    sendButtonBg: "bg-black",
    sendButtonRadius: "rounded-sm",
    sendButtonIconColor: "text-white",
    inputBg: "bg-gray-50",
    inputText: "text-black",
    codeExample: `function MinimalistTheme({ children }) {
  return (
    <div className="bg-slate-900 text-slate-100 
      shadow-2xl shadow-indigo-900/50">
      <nav className="border-indigo-700">
        {children}
      </nav>
    </div>
  );
}`,
    codeBlockClassName: "rounded-2xl",
    codeBlockTheme: 'dark',
    backgroundComponent: <MinimalistBackground />
  },
  cherry: {
    name: "Cherry Blossom",
    background: "bg-gradient-to-br from-pink-100 via-rose-50 to-red-100",
    cardBg: "bg-white/90 backdrop-blur",
    text: "text-rose-900",
    accent: "bg-rose-500",
    border: "border-rose-300",
    font: "font-serif",
    borderRadius: "rounded-xl",
    buttonRadius: "rounded-xl",
    shadow: "shadow-xl shadow-rose-200/50",
    buttonBg: "bg-rose-400",
    buttonBorder: "border-rose-500",
    buttonText: "text-white",
    buttonBorderWidth: "border-2",
    buttonHoverShadow: "",
    buttonHover: "hover:bg-rose-500",
    buttonHoverText: "",
    sendButtonBg: "bg-rose-500",
    sendButtonRadius: "rounded-xl",
    sendButtonIconColor: "text-white",
    inputBg: "bg-white",
    inputText: "text-rose-900",
    codeExample: `<article className="font-serif rounded-xl 
  bg-rose-50 border-rose-300 
  shadow-xl shadow-rose-200/50">
  <header>
    <h1>Cherry Blossom</h1>
    <p className="text-rose-900">Soft & Elegant</p>
  </header>
  <button className="bg-rose-400 rounded-xl">
    Read More
  </button>
</article>`,
    codeBlockClassName: "rounded-xl border-2 border-rose-400 [&_pre]:!bg-white [&_code]:!text-rose-900",
    codeBlockTheme: 'light'
  },
  dreamy: {
    name: "Dreamy",
    background: "bg-[#edecfb]",
    cardBg: "bg-white/85 backdrop-blur",
    text: "text-violet-900",
    accent: "bg-purple-500",
    border: "",
    font: "font-mono",
    borderRadius: "rounded-2xl",
    buttonRadius: "rounded-full",
    shadow: "shadow-none",
    buttonBg: "bg-[#d9eeba]",
    buttonBorder: "",
    buttonText: "text-purple-900",
    buttonBorderWidth: "",
    buttonHoverShadow: "",
    buttonHover: "hover:bg-[#c5dbd5]",
    buttonHoverText: "",
    sendButtonBg: "bg-[#d9eeba]",
    sendButtonRadius: "rounded-full",
    sendButtonIconColor: "text-purple-900",
    inputBg: "bg-white/50",
    inputText: "text-purple-900",
    codeExample: `const dreamyConfig = {
  colors: {
    primary: '#a855f7',
    secondary: '#ddd6fe',
  },
  typography: 'mono',
  radius: 'rounded-2xl',
  shadow: 'shadow-lg'
};

export default lavenderConfig;`,
    codeBlockClassName: "rounded-2xl bg-[#c5dbd5]/40 [&_pre]:!bg-[#c5dbd5]/20 [&_code]:!text-purple-900",
    codeBlockTheme: 'light',
    backgroundComponent: <Liquid />
  }
}

/**
 * Dynamic UI with multiple themes
 */
export function DynamicUIThemes() {
  const [inputValue, setInputValue] = useState("")
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes.default)

  const handleSend = () => {
    if (inputValue.trim()) {
      console.log("Sending:", inputValue)
      setInputValue("")
    }
  }

  const handleThemeChange = (themeName: string, prompt: string) => {
    setCurrentTheme(themes[themeName])
    setInputValue(prompt)
  }

  const content = (
    <div className="relative z-10 w-full max-w-4xl flex flex-col space-y-6">

        <div className={`relative overflow-visible p-8 transition-all duration-500 ${currentTheme.cardBg} ${currentTheme.border} ${currentTheme.borderRadius} ${currentTheme.shadow} border-2`}>
          {/* Card Background Component */}
          {currentTheme.cardBackgroundComponent && (
            <div className="absolute inset-0 z-0 overflow-hidden rounded-inherit">
              {currentTheme.cardBackgroundComponent}
            </div>
          )}
          
          <div className="relative z-10">
          {/* Code Block Section */}
          <div className="mb-6">
            {currentTheme.name === "Default" || currentTheme.name === "Minimalist" ? (
              <div className={`relative w-full overflow-hidden rounded-md border-none ${currentTheme.codeBlockClassName}`}>
                <div className="relative">
                  <SyntaxHighlighter
                    language="jsx"
                    style={draculaTheme}
                    customStyle={{
                      margin: 0,
                      padding: "1rem",
                      fontSize: "0.875rem",
                      background: '#282a36',
                      color: '#f8f8f2',
                    }}
                    codeTagProps={{
                      className: "font-mono text-sm",
                    }}
                  >
                    {currentTheme.codeExample}
                  </SyntaxHighlighter>
                  <div className="absolute top-2 right-2 flex items-center gap-2">
                    <CodeBlockCopyButton
                      onCopy={() => console.log('Copied code to clipboard')}
                      onError={() => console.error('Failed to copy code to clipboard')}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <CodeBlock 
                code={currentTheme.codeExample} 
                language="jsx"
                className={currentTheme.codeBlockClassName}
              >
                <CodeBlockCopyButton
                  onCopy={() => console.log('Copied code to clipboard')}
                  onError={() => console.error('Failed to copy code to clipboard')}
                />
              </CodeBlock>
            )}
          </div>

          <PromptInput
            className={`${currentTheme.inputBg} ${currentTheme.border} ${currentTheme.borderRadius} ${currentTheme.shadow} border-2 transition-all duration-300`}
            value={inputValue}
            onValueChange={setInputValue}
            onSubmit={handleSend}
          >
            <PromptInputTextarea 
              placeholder="Type a message or click a theme..." 
              className={`${currentTheme.inputText} placeholder:text-[#30b8c6]/50`}
            />
            <PromptInputActions className="justify-end">
              <Button
                size="sm"
                className={`size-9 cursor-pointer ${currentTheme.sendButtonRadius} ${currentTheme.sendButtonBg} hover:opacity-90 transition-all`}
                onClick={handleSend}
                disabled={!inputValue.trim()}
                aria-label="Send"
              >
                <ArrowUpIcon className={`h-4 w-4 ${currentTheme.sendButtonIconColor}`} />
              </Button>
            </PromptInputActions>
          </PromptInput>

          <div className="flex flex-wrap gap-3 mt-6">
            <PromptSuggestion 
              onClick={() => handleThemeChange("default", "Reset to default theme")}
              className={`transition-all ${currentTheme.buttonRadius} ${currentTheme.buttonBg} ${currentTheme.buttonBorder} ${currentTheme.buttonText} ${currentTheme.buttonBorderWidth} ${currentTheme.buttonHoverShadow} ${currentTheme.buttonHover} ${currentTheme.buttonHoverText}`}
            >
              Default
            </PromptSuggestion>

            <PromptSuggestion 
              onClick={() => handleThemeChange("brutalist", "Show me neubrutalism")}
              className={`transition-all ${currentTheme.buttonRadius} ${currentTheme.buttonBg} ${currentTheme.buttonBorder} ${currentTheme.buttonText} ${currentTheme.buttonBorderWidth} ${currentTheme.buttonHoverShadow} ${currentTheme.buttonHover} ${currentTheme.buttonHoverText}`}
            >
              Brutalist
            </PromptSuggestion>

            <PromptSuggestion 
              onClick={() => handleThemeChange("miami", "Create sunset mood")}
              className={`transition-all ${currentTheme.buttonRadius} ${currentTheme.buttonBg} ${currentTheme.buttonBorder} ${currentTheme.buttonText} ${currentTheme.buttonBorderWidth} ${currentTheme.buttonHoverShadow} ${currentTheme.buttonHover} ${currentTheme.buttonHoverText}`}
            >
              Miami Vaporwave
            </PromptSuggestion>

            {/* <PromptSuggestion
              onClick={() => handleThemeChange("forest", "Nature theme please")}
              className={`transition-all ${currentTheme.buttonRadius} ${currentTheme.buttonBg} ${currentTheme.buttonBorder} ${currentTheme.buttonText} ${currentTheme.buttonBorderWidth} ${currentTheme.buttonHoverShadow} ${currentTheme.buttonHover} ${currentTheme.buttonHoverText}`}
            >
              Forest
            </PromptSuggestion> */}

            <PromptSuggestion 
              onClick={() => handleThemeChange("minimalist", "Dieter Rams inspired")}
              className={`transition-all ${currentTheme.buttonRadius} ${currentTheme.buttonBg} ${currentTheme.buttonBorder} ${currentTheme.buttonText} ${currentTheme.buttonBorderWidth} ${currentTheme.buttonHoverShadow} ${currentTheme.buttonHover} ${currentTheme.buttonHoverText}`}
            >
              Minimalist
            </PromptSuggestion>

            {/* <PromptSuggestion
              onClick={() => handleThemeChange("cherry", "Cherry blossom style")}
              className={`transition-all ${currentTheme.buttonRadius} ${currentTheme.buttonBg} ${currentTheme.buttonBorder} ${currentTheme.buttonText} ${currentTheme.buttonBorderWidth} ${currentTheme.buttonHoverShadow} ${currentTheme.buttonHover} ${currentTheme.buttonHoverText}`}
            >
              Cherry
            </PromptSuggestion> */}

            <PromptSuggestion
              onClick={() => handleThemeChange("dreamy", "Liquid dreams")}
              className={`transition-all ${currentTheme.buttonRadius} ${currentTheme.buttonBg} ${currentTheme.buttonBorder} ${currentTheme.buttonText} ${currentTheme.buttonBorderWidth} ${currentTheme.buttonHoverShadow} ${currentTheme.buttonHover} ${currentTheme.buttonHoverText}`}
            >
              Dreamy
            </PromptSuggestion>
          </div>
          </div>
        </div>
    </div>
  )

  return (
    <div 
      className={`relative h-full w-full flex items-center justify-center p-8 transition-all duration-700 ${currentTheme.background} ${currentTheme.font}`}
      style={currentTheme.backgroundStyle}
    >
      {currentTheme.backgroundComponent}
      {content}
    </div>
  )
}

// Keep the original component for backward compatibility
export function PromptSuggestionBasic() {
  return <DynamicUIThemes />
}
