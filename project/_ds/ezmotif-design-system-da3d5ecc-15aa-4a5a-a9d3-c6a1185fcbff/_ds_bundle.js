/* @ds-bundle: {"format":3,"namespace":"EZMOTIFDesignSystem_da3d5e","components":[],"sourceHashes":{"ui_kits/studio-website/About.jsx":"01d268ad32e5","ui_kits/studio-website/Contact.jsx":"19895e42aa67","ui_kits/studio-website/Hero.jsx":"762e7a7468bd","ui_kits/studio-website/Marquee.jsx":"39947c635587","ui_kits/studio-website/Nav.jsx":"73d959216bab","ui_kits/studio-website/Primitives.jsx":"ae26df265dc7","ui_kits/studio-website/Services.jsx":"dd463c0543a1","ui_kits/studio-website/Work.jsx":"5693a91e6c23"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EZMOTIFDesignSystem_da3d5e = window.EZMOTIFDesignSystem_da3d5e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/studio-website/About.jsx
try { (() => {
/* Studio — large statement / about band on off-white */

const About = () => /*#__PURE__*/React.createElement("section", {
  style: {
    maxWidth: 1000,
    margin: "0 auto",
    padding: "96px 40px 40px"
  }
}, /*#__PURE__*/React.createElement(Eyebrow, null, "The studio"), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: "Anybody, sans-serif",
    fontWeight: 700,
    fontStretch: "108%",
    fontSize: 40,
    lineHeight: 1.18,
    letterSpacing: "-0.02em",
    color: "#2d1c14",
    margin: "26px 0 0",
    textWrap: "balance"
  }
}, "We believe great design should be intentional, timeless and meaningful \u2014", /*#__PURE__*/React.createElement("span", {
  style: {
    color: "#968f88"
  }
}, " grounded in simplicity, inspired by nature, and quietly bold.")), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 64,
    marginTop: 48,
    flexWrap: "wrap"
  }
}, [["12+", "Years crafting brands"], ["80+", "Identities shipped"], ["4", "Disciplines, one belief"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
  key: l
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Anybody, sans-serif",
    fontWeight: 900,
    fontStretch: "115%",
    fontSize: 46,
    color: "#2d1c14",
    lineHeight: 1
  }
}, n), /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Lato, sans-serif",
    fontSize: 14,
    color: "#6b4f3f",
    marginTop: 8
  }
}, l)))));
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-website/Contact.jsx
try { (() => {
/* Contact CTA + footer on espresso ground, with interactive form */

const Contact = () => {
  const [sent, setSent] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#2d1c14",
      color: "#f6f4f2"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "96px 40px 56px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr",
      gap: 56,
      alignItems: "center",
      paddingBottom: 72,
      borderBottom: "1px solid rgba(246,244,242,0.16)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    dark: true
  }, "Start a project"), /*#__PURE__*/React.createElement(Display, {
    size: 64,
    dark: true,
    style: {
      marginTop: 18
    }
  }, "Let's make", /*#__PURE__*/React.createElement("br", null), "something lasting")), /*#__PURE__*/React.createElement("div", null, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "20px 0"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 26,
      height: 26,
      color: "#b4c62a"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Lato, sans-serif",
      fontSize: 18,
      color: "#f6f4f2"
    }
  }, "Thanks \u2014 we'll be in touch shortly.")) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: "Lato, sans-serif",
      fontWeight: 700,
      fontSize: 11,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "#cdc0b8"
    }
  }, "Your email"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: email,
    onChange: e => setEmail(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    placeholder: "hello@yourbrand.co",
    style: {
      flex: 1,
      fontFamily: "Lato, sans-serif",
      fontSize: 15,
      padding: "13px 14px",
      borderRadius: 2,
      background: "rgba(246,244,242,0.06)",
      color: "#f6f4f2",
      border: "1px solid " + (focus ? "#b4c62a" : "rgba(246,244,242,0.28)"),
      outline: "none"
    }
  }), /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    icon: "arrow-right",
    onClick: () => email && setSent(true)
  }, "Send")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Lato, sans-serif",
      fontSize: 13,
      color: "#9c8275",
      marginTop: 12
    }
  }, "Or email us directly at hello@ezmotif.co")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: 36,
      flexWrap: "wrap",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-stonegrey.png",
    alt: "EZMOTIF",
    style: {
      height: 16,
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      fontFamily: "Lato, sans-serif",
      fontSize: 13,
      color: "#cdc0b8"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Instagram"), /*#__PURE__*/React.createElement("span", null, "Behance"), /*#__PURE__*/React.createElement("span", null, "LinkedIn")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Lato, sans-serif",
      fontSize: 13,
      color: "#9c8275"
    }
  }, "\xA9 2026 EZMOTIF Studio Visuals"))));
};
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-website/Hero.jsx
try { (() => {
/* Hero — big Anybody headline, script accent, lead, CTAs, nested-square motif */

const NestedMotif = ({
  size = 240
}) => {
  const layers = ["#d3cfcb", "#8a9fb7", "#5079b2", "#b4c62a", "#f6f4f2"];
  const scales = [1, 0.78, 0.7, 0.64, 0.52];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      position: "relative",
      flex: "none"
    }
  }, layers.map((c, i) => {
    const s = scales.slice(0, i + 1).reduce((a, b) => a * b, 1) * size;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: "absolute",
        top: "50%",
        left: "50%",
        width: s,
        height: s,
        marginTop: -s / 2,
        marginLeft: -s / 2,
        background: c
      }
    });
  }));
};
const Hero = ({
  onCta
}) => /*#__PURE__*/React.createElement("section", {
  style: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "96px 40px 80px",
    display: "grid",
    gridTemplateColumns: "1.5fr 1fr",
    gap: 56,
    alignItems: "center"
  }
}, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Studio \u2014 Visual Identity"), /*#__PURE__*/React.createElement("div", {
  style: {
    margin: "20px 0 8px",
    position: "relative"
  }
}, /*#__PURE__*/React.createElement(Display, {
  size: 84
}, "Design", /*#__PURE__*/React.createElement("br", null), "with intention"), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    right: 40,
    top: -18
  }
}, /*#__PURE__*/React.createElement(Script, {
  size: 40,
  rotate: -6
}, "by nature"))), /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: "Lato, sans-serif",
    fontWeight: 300,
    fontSize: 20,
    lineHeight: 1.55,
    color: "#6b4f3f",
    maxWidth: "44ch",
    margin: "20px 0 32px"
  }
}, "We craft calm, distinctive identities for brands that want to last \u2014 grounded in simplicity, inspired by nature."), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 14
  }
}, /*#__PURE__*/React.createElement(Btn, {
  variant: "primary",
  size: "lg",
  icon: "arrow-right",
  onClick: onCta
}, "Start a project"), /*#__PURE__*/React.createElement(Btn, {
  variant: "ghost",
  size: "lg"
}, "View work"))), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "grid",
    placeItems: "center"
  }
}, /*#__PURE__*/React.createElement(NestedMotif, {
  size: 260
})));
window.Hero = Hero;
window.NestedMotif = NestedMotif;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-website/Marquee.jsx
try { (() => {
/* Running marquee strip — the triad on espresso */

const Marquee = () => {
  const items = ["Intentional", "Timeless", "Meaningful", "Grounded", "Refined", "Bold"];
  const run = [...items, ...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#2d1c14",
      overflow: "hidden",
      padding: "16px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 0,
      animation: "ezmarquee 26s linear infinite",
      whiteSpace: "nowrap"
    }
  }, run.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "inline-flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Anybody, sans-serif",
      fontWeight: 800,
      fontStretch: "112%",
      fontSize: 22,
      letterSpacing: "0.02em",
      textTransform: "uppercase",
      color: "#f6f4f2",
      padding: "0 28px"
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      background: "#b4c62a",
      borderRadius: 999
    }
  })))), /*#__PURE__*/React.createElement("style", null, `@keyframes ezmarquee { from { transform: translateX(0); } to { transform: translateX(-33.33%); } }`));
};
window.Marquee = Marquee;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-website/Marquee.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-website/Nav.jsx
try { (() => {
/* Fixed top navigation — quiet, hairline bottom border */

const Nav = ({
  active,
  onNav,
  onCta
}) => {
  const links = ["work", "studio", "services", "journal"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(246,244,242,0.82)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid rgba(45,28,20,0.10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "0 40px",
      height: 72,
      display: "flex",
      alignItems: "center",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav("home"),
    style: {
      cursor: "pointer",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-espresso.png",
    alt: "EZMOTIF",
    style: {
      height: 18,
      width: "auto",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 28,
      marginLeft: 12
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    onClick: () => onNav(l),
    style: {
      fontFamily: "Lato, sans-serif",
      fontSize: 14,
      fontWeight: active === l ? 700 : 400,
      letterSpacing: "0.01em",
      color: active === l ? "#2d1c14" : "#6b4f3f",
      textTransform: "capitalize",
      cursor: "pointer",
      paddingBottom: 2,
      borderBottom: active === l ? "2px solid #b4c62a" : "2px solid transparent"
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "ink",
    size: "sm",
    icon: "arrow-right",
    onClick: onCta
  }, "Start a project"))));
};
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-website/Primitives.jsx
try { (() => {
/* Shared UI primitives for the EZMOTIF studio website kit */

const Btn = ({
  variant = "primary",
  size = "md",
  children,
  onClick,
  icon
}) => {
  const ezBtnBase = {
    fontFamily: "Lato, sans-serif",
    fontWeight: 700,
    cursor: "pointer",
    border: "1px solid transparent",
    borderRadius: 2,
    letterSpacing: "0.01em",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    transition: "all 160ms cubic-bezier(0.22,1,0.36,1)",
    whiteSpace: "nowrap"
  };
  const sizes = {
    md: {
      fontSize: 15,
      padding: "13px 24px"
    },
    sm: {
      fontSize: 13,
      padding: "9px 16px"
    },
    lg: {
      fontSize: 16,
      padding: "16px 30px"
    }
  };
  const variants = {
    primary: {
      background: "#b4c62a",
      color: "#2d1c14"
    },
    ink: {
      background: "#2d1c14",
      color: "#f6f4f2"
    },
    ghost: {
      background: "transparent",
      color: "#2d1c14",
      borderColor: "#2d1c14"
    },
    ghostLight: {
      background: "transparent",
      color: "#f6f4f2",
      borderColor: "rgba(246,244,242,0.4)"
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = hover ? {
    primary: {
      background: "#a2b323"
    },
    ink: {
      background: "#4a3327"
    },
    ghost: {
      background: "#2d1c14",
      color: "#f6f4f2"
    },
    ghostLight: {
      background: "#f6f4f2",
      color: "#2d1c14",
      borderColor: "#f6f4f2"
    }
  }[variant] : {};
  return /*#__PURE__*/React.createElement("button", {
    style: {
      ...ezBtnBase,
      ...sizes[size],
      ...variants[variant],
      ...hoverStyle
    },
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, children, icon && /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 17,
      height: 17
    }
  }));
};
const Eyebrow = ({
  children,
  dark
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    fontFamily: "Lato, sans-serif",
    fontWeight: 700,
    fontSize: 12,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: dark ? "#cdc0b8" : "#6b4f3f"
  }
}, children);
const Display = ({
  children,
  size = 64,
  dark,
  style
}) => /*#__PURE__*/React.createElement("h2", {
  style: {
    fontFamily: "Anybody, sans-serif",
    fontWeight: 900,
    fontStretch: "114%",
    fontSize: size,
    lineHeight: 0.98,
    letterSpacing: "-0.02em",
    textTransform: "uppercase",
    margin: 0,
    color: dark ? "#f6f4f2" : "#2d1c14",
    textWrap: "balance",
    ...style
  }
}, children);
const Script = ({
  children,
  color = "#5079b2",
  size = 30,
  rotate = -4
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontFamily: "'Nanum Pen Script', cursive",
    fontSize: size,
    color,
    display: "inline-block",
    transform: `rotate(${rotate}deg)`,
    lineHeight: 1
  }
}, children);
window.Btn = Btn;
window.Eyebrow = Eyebrow;
window.Display = Display;
window.Script = Script;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-website/Primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-website/Services.jsx
try { (() => {
/* Services — numbered list on stone ground */

const SERVICES = [{
  n: "01",
  t: "Brand Identity",
  d: "Logos, palettes and systems that feel inevitable and last."
}, {
  n: "02",
  t: "Art Direction",
  d: "A calm, cohesive visual language across every touchpoint."
}, {
  n: "03",
  t: "Editorial & Print",
  d: "Considered layouts for books, reports and packaging."
}, {
  n: "04",
  t: "Digital & Web",
  d: "Modern, minimal interfaces built on the same foundations."
}];
const Services = () => {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#eceae7"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "88px 40px",
      display: "grid",
      gridTemplateColumns: "1fr 1.4fr",
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "What we do"), /*#__PURE__*/React.createElement(Display, {
    size: 44,
    style: {
      marginTop: 14
    }
  }, "Services"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Lato, sans-serif",
      fontWeight: 300,
      fontSize: 17,
      lineHeight: 1.6,
      color: "#6b4f3f",
      marginTop: 18,
      maxWidth: "34ch"
    }
  }, "Every engagement is built on the same belief \u2014 design should be intentional, timeless and meaningful."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Script, {
    size: 30,
    rotate: -5
  }, "made with care"))), /*#__PURE__*/React.createElement("div", null, SERVICES.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    onClick: () => setOpen(i),
    style: {
      borderTop: "1px solid rgba(45,28,20,0.14)",
      padding: "22px 4px",
      cursor: "pointer",
      display: "grid",
      gridTemplateColumns: "48px 1fr auto",
      gap: 18,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Lato, sans-serif",
      fontWeight: 900,
      fontSize: 14,
      color: "#968f88",
      paddingTop: 4
    }
  }, s.n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Anybody, sans-serif",
      fontWeight: 800,
      fontStretch: "110%",
      fontSize: 24,
      textTransform: "uppercase",
      letterSpacing: "-0.01em",
      color: "#2d1c14"
    }
  }, s.t), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden",
      transition: "all 260ms cubic-bezier(0.22,1,0.36,1)",
      maxHeight: open === i ? 80 : 0,
      opacity: open === i ? 1 : 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Lato, sans-serif",
      fontSize: 15,
      lineHeight: 1.55,
      color: "#6b4f3f",
      margin: "10px 0 0",
      maxWidth: "44ch"
    }
  }, s.d))), /*#__PURE__*/React.createElement("i", {
    "data-lucide": open === i ? "minus" : "plus",
    style: {
      width: 20,
      height: 20,
      color: "#2d1c14",
      marginTop: 4
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(45,28,20,0.14)"
    }
  }))));
};
window.Services = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/studio-website/Work.jsx
try { (() => {
/* Work — filterable grid of project tiles (palette-field thumbnails, editorial) */

const PROJECTS = [{
  name: "Nord Roastery",
  cat: "Branding",
  year: "2025",
  bg: "#2d1c14",
  fg: "#f6f4f2",
  accent: "#b4c62a"
}, {
  name: "Atlas Press",
  cat: "Editorial",
  year: "2025",
  bg: "#8a9fb7",
  fg: "#2d1c14",
  accent: "#2d1c14"
}, {
  name: "Fjord Skincare",
  cat: "Packaging",
  year: "2024",
  bg: "#d3cfcb",
  fg: "#2d1c14",
  accent: "#5079b2"
}, {
  name: "Lumen Studio",
  cat: "Web",
  year: "2024",
  bg: "#5079b2",
  fg: "#f6f4f2",
  accent: "#b4c62a"
}, {
  name: "Terra Goods",
  cat: "Branding",
  year: "2024",
  bg: "#b4c62a",
  fg: "#2d1c14",
  accent: "#2d1c14"
}, {
  name: "Hush Hotels",
  cat: "Web",
  year: "2023",
  bg: "#4a3327",
  fg: "#f6f4f2",
  accent: "#8a9fb7"
}];
const Tile = ({
  p
}) => {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: p.bg,
      aspectRatio: "4 / 3",
      borderRadius: 4,
      position: "relative",
      overflow: "hidden",
      display: "grid",
      placeItems: "center",
      transition: "transform 280ms cubic-bezier(0.22,1,0.36,1)",
      transform: hover ? "translateY(-4px)" : "none",
      boxShadow: hover ? "0 12px 40px rgba(45,28,20,0.18)" : "0 1px 2px rgba(45,28,20,0.06)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Anybody, sans-serif",
      fontWeight: 900,
      fontStretch: "115%",
      fontSize: 30,
      textTransform: "uppercase",
      letterSpacing: "-0.01em",
      color: p.fg,
      textAlign: "center",
      lineHeight: 0.95,
      padding: "0 16px"
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: 14,
      right: 14,
      width: 10,
      height: 10,
      background: p.accent
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Lato, sans-serif",
      fontWeight: 700,
      fontSize: 15,
      color: "#2d1c14"
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Lato, sans-serif",
      fontSize: 13,
      color: "#968f88"
    }
  }, p.cat, " \xB7 ", p.year)));
};
const Work = () => {
  const cats = ["All", "Branding", "Editorial", "Packaging", "Web"];
  const [filter, setFilter] = React.useState("All");
  const shown = filter === "All" ? PROJECTS : PROJECTS.filter(p => p.cat === filter);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "88px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: 32,
      flexWrap: "wrap",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Selected work"), /*#__PURE__*/React.createElement(Display, {
    size: 48,
    style: {
      marginTop: 14
    }
  }, "Recent projects")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, cats.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setFilter(c),
    style: {
      fontFamily: "Lato, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      cursor: "pointer",
      padding: "7px 15px",
      borderRadius: 999,
      transition: "all 140ms ease",
      border: "1px solid " + (filter === c ? "#2d1c14" : "#d3cfcb"),
      background: filter === c ? "#2d1c14" : "transparent",
      color: filter === c ? "#f6f4f2" : "#6b4f3f"
    }
  }, c)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 28
    }
  }, shown.map(p => /*#__PURE__*/React.createElement(Tile, {
    key: p.name,
    p: p
  }))));
};
window.Work = Work;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/studio-website/Work.jsx", error: String((e && e.message) || e) }); }

})();
