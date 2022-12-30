import * as Icons from '../components/svg'

export default (props) => (
    <footer className="bg-slate-100">
        <div className="p-12 flex gap-4">
            <a title='Github' href="https://github.com/julic20s" target="_blank">
                <Icons.github
                    className="inline p-2 fill-slate-600 bg-slate-200 hover:bg-black hover:fill-white transition-all"
                    width="48" height="48" />
            </a>
            <a title="Codeforces" href="https://codeforces.com/profile/julic20s" target="_blank">
                <Icons.codeforces
                    className="inline p-2 bg-slate-200 hover:bg-white hover:fill-none transition-all"
                    width="48" height="48" />
            </a>
        </div>
    </footer>
);
