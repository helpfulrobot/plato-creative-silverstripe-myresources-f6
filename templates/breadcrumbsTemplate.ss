<% if Pages %>
	<nav aria-label="You are here:" role="navigation">
		<ul class="breadcrumbs" itemscope itemtype="http://schema.org/BreadcrumbList">
			<li class="item" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
				<a href="{$absoluteBaseURL}" itemscope itemtype="http://schema.org/Thing" itemprop="item">
					<% with SiteConfig %>
						{$Title}
					<% end_with %>
				</a>
				<meta itemprop="position" content="1" />
			</li>
			<% loop Pages %>
				<% if Last %>
					<li class="item last current">
						<a href="{$Link}" itemscope itemtype="http://schema.org/Thing" itemprop="item">
							<span class="show-for-sr">Current: </span>{$Title.XML}
						</a>
						<meta itemprop="position" content="{$Pos}" />
					</li>
				<% else %>
					<li class="item" itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
						<a href="{$Link}" itemscope itemtype="http://schema.org/Thing" itemprop="item">
							{$MenuTitle.XML}
						</a>
						<meta itemprop="position" content="{$Pos}" />
					</li>
				<% end_if %>
			<% end_loop %>
		</ul>
	</nav>
<% end_if %>
