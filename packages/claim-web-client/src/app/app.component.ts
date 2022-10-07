import { Component, OnInit } from '@angular/core';
import { ConnectionStore, WalletStore } from '@heavy-duty/wallet-adapter';
import {
	PhantomWalletAdapter,
	SlopeWalletAdapter,
	SolflareWalletAdapter,
	SolongWalletAdapter,
} from '@solana/wallet-adapter-wallets';


@Component({
  selector: 'poc-root',
  template: ` <poc-nx-welcome></poc-nx-welcome> `,
  styles: [],
})
export class AppComponent implements OnInit {
	title = '';
	constructor(
		private readonly _hdConnectionStore: ConnectionStore,
		private readonly _hdWalletStore: WalletStore
	) {}

	ngOnInit() {
		this._hdConnectionStore.setEndpoint('https://api.devnet.solana.com');
		this._hdWalletStore.setAdapters([
			new PhantomWalletAdapter(),
			new SlopeWalletAdapter(),
			new SolflareWalletAdapter(),
			new SolongWalletAdapter(),
		]);
	}
}
