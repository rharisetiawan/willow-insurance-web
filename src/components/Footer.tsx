export default function Footer() {
    return (
        <footer className="bg-[#101E35] pb-16 px-6 md:px-12 text-gray-400 font-sans text-xs">
            <div className="max-w-6xl mx-auto border-t border-white/10 pt-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                    <div className="flex flex-col space-y-1">
                        <a href="#" className="hover:text-white transition-colors">Shell Lake</a>
                        <a href="#" className="hover:text-white transition-colors">Debden</a>
                        <a href="#" className="hover:text-white transition-colors">Contact Us</a>
                        <a href="#" className="hover:text-white transition-colors">Email</a>
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Legal</a>
                        <a href="#" className="hover:text-white transition-colors">Contact</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Feedback</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
