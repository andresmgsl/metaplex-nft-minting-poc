import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ConnectionStore, WalletStore } from '@heavy-duty/wallet-adapter';
import { map } from 'rxjs';

/* eslint-disable */

@Component({
  selector: 'poc-nx-welcome',
  template: `

<div>
	<select
		[ngModel]="walletName$ | async"
		(ngModelChange)="onSelectWallet($event)"
	>
		<option [ngValue]="null">Not selected</option>
		<option
			*ngFor="let wallet of wallets$ | async"
			[ngValue]="wallet.adapter.name"
		>
			{{ wallet.adapter.name }} ({{ wallet.readyState }})
		</option>
	</select>

	<p>
		Selected provider: {{ walletName$ | async }}
		<ng-container *ngIf="ready$ | async">(READY)</ng-container>
	</p>
</div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit {
	readonly wallets$ = this._walletStore.wallets$;
	readonly wallet$ = this._walletStore.wallet$;
	readonly ready$ = this._walletStore.connected$;
	readonly walletName$ = this.wallet$.pipe(
		map((wallet) => wallet?.adapter.name || null)
	);

	constructor(
		private readonly _connectionStore: ConnectionStore,
		private readonly _walletStore: WalletStore
	) {}

	ngOnInit(): void {}

	onSelectWallet(walletName: any) {
		this._walletStore.selectWallet(walletName);
	}
}
