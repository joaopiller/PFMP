import { GoLaw } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { PiHandCoins } from "react-icons/pi";
import { AiOutlineHome } from "react-icons/ai";
import { PiHandshakeLight } from "react-icons/pi";
import { RiGovernmentLine } from "react-icons/ri";
import { FaRegFolderOpen } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { LuPlaneTakeoff } from "react-icons/lu";
import { FaGears } from "react-icons/fa6";
import { IoMdKey } from "react-icons/io";

const areasDeAtuacao = [
    {
        name: "Defesa em Autuações Fiscais",
        icon: IoDocumentTextOutline
    },
    {
        name: "Contencioso Judicial Estratégico",
        icon: GoLaw
    },
    {
        name: "Planejamento Tributário",
        icon: LuChartNoAxesCombined
    },
    {
        name: "Recuperação de Créditos Tributários",
        icon: PiHandCoins
    },
    {
        name: "Planejamento Patrimonial e Sucessório",
        icon: AiOutlineHome
    },
    {
        name: "Negociações e Transações Tributárias",
        icon: PiHandshakeLight
    },
    {
        name: "Relações Institucionais e Governamentais",
        icon: RiGovernmentLine
    },
    {
        name: "Gestão de Passivos Tributários",
        icon:  FaRegFolderOpen
    },
    {
        name: "Consultoria Tributária Geral",
        icon: MdAttachMoney
    },
    {
        name: "Assessoria na Declaração de Saída Definitiva do Brasil",
        icon: LuPlaneTakeoff
    },
    {
        name: "Assessoria na Transição da Reforma Tributária",
        icon: FaGears
    },
    {
        name: "Gestão e Contencioso Imobiliário",
        icon: IoMdKey
    }
]

export default areasDeAtuacao;