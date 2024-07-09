import './header.css';
import Link from 'next/link';


export default function Header() {
    return (
        <div>
            <div class="header">
            <a class="anchor-logo" href="/"><img class="logo-pic" src='images/dbex-logo-1.png' alt=""/></a>
            <div class="middle-header">
                <a class="anchor-ind" href="https://dbextech.com/industries.html">Industries</a>
                <a class="anchor-prod" href="https://dbextech.com/products.html">Products</a>
                <a class="anchor-TBD" href="https://dbextech.com/index.html">TBD</a>
            </div>
            <div class="right-header"><Link class="live-demo" href="@/app/pages/demo-front">Go to Live Demo page</Link></div>
            <Link href="/">test</Link>
        </div>
                
        </div>
        );
    }

